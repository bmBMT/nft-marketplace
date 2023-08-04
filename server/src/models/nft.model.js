import { Schema, model } from 'mongoose';

const NftSchema = new Schema({
  name: { type: String, unique: true, required: true },
  img: { type: String, required: true },
  created: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },
})

export default model('Nft', NftSchema)