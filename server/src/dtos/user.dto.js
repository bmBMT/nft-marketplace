export default class UserDto {
  id;
  username;
  email;
  img;
  placeholder;
  followers;
  bio;
  links;
  nft;
  sales;
  following;

  constructor(model) {
    this.id = model._id;
    this.username = model.username;
    this.email = model.email;
    this.img = process.env.API_URL + "/" + model.img;
    this.placeholder = process.env.API_URL + "/" + model.placeholder.path;
    this.followers = model.followers;
    this.bio = model.bio;
    this.links = model.links;
    this.nft = model.nft;
    this.sales = model.sales;
    this.following = model.following;
  }
}