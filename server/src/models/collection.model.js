import { Schema, model } from 'mongoose'

const CollectionModel = new Schema({
  name: { type: String, required: true },
  owner: {
    _id: { type: Schema.Types.ObjectId, ref: 'User' },
    avatar: { type: String, required: true },
    username: { type: String, required: true }
  },
  nfts: { type: [Schema.Types.ObjectId], ref: 'Nft', default: [] }
}, {timestamps: true})

export default model('Collection', CollectionModel)