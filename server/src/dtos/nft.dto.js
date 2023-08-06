export default class NftDto {
  id;
  name;
  img;
  created;
  createdBy;
  owner;
  description;
  categorie;
  tags;
  price;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.img = process.env.API_URL + "/" + model._id + "/" + model.img;
    this.created = model.created;
    this.createdBy = model.createdBy;
    this.owner = model.owner;
    this.description = model.description;
    this.categorie = model.categorie;
    this.tags = model.tags;
    this.price = model.price;
  }
}