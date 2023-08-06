import userService from "../service/user.service.js";

export default async function (user) {
  const placeholder = user.placeholder;

  if (placeholder.nftId !== null) {
    if (!user.nft.owned.includes(placeholder.nftId)) {
      placeholder.nftId = null;
      placeholder.path = "default/placeholder.webp";
    } else {
      const { placeholderPath } = await userService.changePlaceholder(placeholder.nftId, user._id);
      placeholder.path = placeholderPath;
    }
  } else {
    placeholder.path = "default/placeholder.webp";
  }

  const avatar = user.avatar;

  if (avatar.nftId !== null) {
    if (!user.nft.owned.includes(avatar.nftId)) {
      avatar.nftId = null;
      avatar.path = "default/avatar.webp";
    } else {
      const { avatarPath } = await userService.changeAvatar(avatar.nftId, user._id);
      avatar.path = avatarPath;
    }
  } else {
    avatar.path = "default/avatar.webp";
  }

  user.save()

  return user;
}