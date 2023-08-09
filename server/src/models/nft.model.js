import { Schema, model } from 'mongoose';

const NftSchema = new Schema({
  name: { type: String, unique: true, required: true },
  img: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  creator: {
    _id: { type: Schema.Types.ObjectId, ref: 'User' },
    avatar: { type: String, required: true },
    username: { type: String, required: true }
  },
  owner: {
    _id: { type: Schema.Types.ObjectId, ref: 'User' },
    avatar: { type: String, required: true },
    username: { type: String, required: true }
  },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },
})

export default model('Nft', NftSchema)