import UserModel from '../models/user.model.js';
import UserDto from '../dtos/user.dto.js';
import ApiError from '../exceptions/api.error.js';
import NftDto from '../dtos/nft.dto.js';
import NftModel from '../models/nft.model.js';
import handleUserPictures from '../utils/handleUserPictures.js';
import generateNftPicturePath from '../utils/generateNftPicturePath.js';

class UserService {
  async getUser(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.BadRequest('User does not exist');
    }

    const createdNfts = await NftModel.find({ _id: { $in: user.nft.created } });
    const createdNftsDto = createdNfts.map((nft) => new NftDto(nft));

    const ownedNfts = await NftModel.find({ _id: { $in: user.nft.owned } });
    const ownedNftsDto = ownedNfts.map((nft) => new NftDto(nft));

    const nfts = {
      "created": createdNftsDto,
      "owned": ownedNftsDto,
      "collection": []
    };

    const handledUser = await handleUserPictures(user);

    const userDto = new UserDto(handledUser)
    return { user: userDto, nfts };
  }

  async follow(id, userId) {
    const user = await UserModel.findById(userId);
    const followingUser = await UserModel.findById(id);

    if (user.following.includes(id)) {
      throw ApiError.BadRequest('User aleady followed');
    }

    user.following.push(id);
    followingUser.followers += 1;
    user.save();
    followingUser.save();

    const userDto = new UserDto(user)
    return userDto;
  }

  async unfollow(id, userId) {
    const user = await UserModel.findById(userId);
    const followingUser = await UserModel.findById(id);

    if (!user.following.includes(id)) {
      throw ApiError.BadRequest('User aleady unfollowed');
    }

    user.following = user.following.filter(_id => _id != id);
    followingUser.followers -= 1;
    user.save();
    followingUser.save();

    const userDto = new UserDto(user)
    return userDto;
  }

  async changeAvatar(nftId, userId) {
    const user = await UserModel.findById(userId);
    const nft = await NftModel.findById(nftId);

    if (!user.nft.owned.includes(nftId)) {
      throw ApiError.BadRequest("This nft does not belong to the user")
    }

    const avatarPath = generateNftPicturePath(nft);
    user.avatar.nftId = nftId;
    user.avatar.path = avatarPath;
    user.save();

    const avatarLink = process.env.API_URL + "/" + user.avatar.path;
    return { avatarLink, avatarPath };
  }

  async changePlaceholder(nftId, userId) {
    const user = await UserModel.findById(userId);
    const nft = await NftModel.findById(nftId);

    if (!user.nft.owned.includes(nftId)) {
      throw ApiError.BadRequest("This nft does not belong to the user")
    }

    const placeholderPath = generateNftPicturePath(nft);
    user.placeholder.nftId = nftId;
    user.placeholder.path = placeholderPath;
    user.save();

    const placeholderLink = process.env.API_URL + "/" + user.placeholder.path;
    return { placeholderLink, placeholderPath };
  }
}

export default new UserService();