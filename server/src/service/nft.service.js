import ApiError from '../exceptions/api.error.js';
import nftModel from '../models/nft.model.js';
import userModel from '../models/user.model.js';
import walletModel from '../models/wallet.model.js';
import walletService from './wallet.service.js';
import UserDto from '../dtos/user.dto.js';
import path from 'path'
import fs from 'fs';

class NftService {
  async create(name, img, userId, description, categorie, tags, price) {
    const candidate = await nftModel.findOne({ name });
    if (candidate) {
      throw ApiError.BadRequest('Nft with this name already exists');
    }

    const fileName = new Date().getTime() + '.webp';

    const nft = await nftModel.create({ name, img: fileName, createdBy: userId, owner: userId, description, categorie, tags, price })

    const __dirname = path.resolve();
    const folderName = nft._id;
    const dirpath = path.resolve(__dirname, 'src', 'static', `${folderName}`);
    fs.mkdirSync(dirpath, { recursive: true })
    img.mv(path.resolve(dirpath, fileName))

    const user = await userModel.findById(userId);
    user.nft.created.push(nft.id);
    user.nft.owned.push(nft.id);
    user.save();

    return nft._id;
  }

  async buy(id, userId) {
    const user = await userModel.findById(userId);
    const nft = await nftModel.findById(id);
    const userWallet = await walletModel.findOne({ user: userId });

    if (user.nft.owned.includes(id)) {
      throw ApiError.BadRequest('This nft belongs to the user');
    }
    if (userWallet.cash < nft.price) {
      throw ApiError.BadRequest('Insufficient funds to complete the transaction');
    }

    const owner = await userModel.findById(nft.owner);
    walletService.increment(owner._id, nft.price);
    walletService.decrement(userId, nft.price);

    owner.nft.owned = owner.nft.owned.filter(nftid => nftid != id);
    owner.sales.value = Number((owner.sales.value + nft.price).toFixed(5));
    owner.sales.soldCount += 1;
    user.nft.owned.push(nft._id);
    owner.save();
    user.save();

    nft.owner = userId;
    nft.save();

    return nft._id;
  }
}

export default new NftService();