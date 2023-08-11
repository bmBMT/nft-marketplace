export default class CollectionDto {
  id;
  name;
  onwer;
  nfts;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.onwer = {
      id: model.owner._id,
      avatar: process.env.API_URL + "/" + model.owner.avatar,
      username: model.owner.username
    };
    this.nfts = model.nfts;
  }
}