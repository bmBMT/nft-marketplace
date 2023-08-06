export default function (user) {
  const placeholder = user.placeholder;


  if (!user.nft.owned.includes(placeholder.nftId) && placeholder.nftId !== null) {
    placeholder.nftId = null;
    placeholder.path = "default/placeholder";
  }

  user.save()

  return user;
}