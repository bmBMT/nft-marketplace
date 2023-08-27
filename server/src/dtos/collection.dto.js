export default class CollectionDto {
  id;
  name;
  owner;
  nfts;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.owner = {
      id: model.owner._id,
      avatar: process.env.API_URL + "/" + model.owner.avatar,
      username: model.owner.username
    };
    this.nfts = model.nfts;
  }
}