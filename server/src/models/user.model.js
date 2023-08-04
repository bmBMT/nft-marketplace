import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  img: { type: String, required: true },
  followers: { type: Number, default: 0 },
  bio: { type: String, default: '' },
  links: {
    globe: { type: String, default: '' },
    discord: { type: String, default: '' },
    youtube: { type: String, default: '' },
    twitter: { type: String, default: '' },
    instagram: { type: String, default: '' }
  },
  nft: {
    created: { type: [Schema.Types.ObjectId], ref: 'Nft', default: [] },
    owned: { type: [Schema.Types.ObjectId], ref: 'Nft', default: [] },
    collection: { type: [Schema.Types.ObjectId], ref: 'Collection', default: [] }
  },
  sales: {
    value: { type: Number, default: 0 },
    soldCount: { type: Number, default: 0 }
  },
  following: { type: [Schema.Types.ObjectId], ref: 'User', default: [] }
})

export default model('User', UserSchema)