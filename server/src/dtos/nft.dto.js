import convertDate from "../utils/convertDate.js";

export default class NftDto {
  id;
  name;
  img;
  createdDate;
  creator;
  owner;
  description;
  category;
  tags;
  price;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.img = process.env.API_URL + "/" + model._id + "/" + model.img;
    this.createdDate = convertDate(model.createdDate);
    this.creator = {
      id: model.creator._id,
      avatar: process.env.API_URL + "/" + model.creator.avatar,
      username: model.creator.username
    };
    this.owner = {
      id: model.owner._id,
      avatar: process.env.API_URL + "/" + model.owner.avatar,
      username: model.owner.username
    };
    this.description = model.description;
    this.category = model.category;
    this.tags = model.tags;
    this.price = model.price;
  }
}