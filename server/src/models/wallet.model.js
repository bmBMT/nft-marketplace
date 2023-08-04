import { Schema, model } from 'mongoose';

const WalletSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cash: { type: Number, default: 0.2 }
})

export default model('Wallet', WalletSchema)