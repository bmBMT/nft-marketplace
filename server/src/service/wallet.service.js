import WalletDto from "../dtos/wallet.dto.js";
import ApiError from "../exceptions/api.error.js";
import WalletModel from "../models/wallet.model.js";

class WalletService {
  async increment(userId, count) {
    const wallet = await WalletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    const num = parseFloat(count);
    wallet.cash = Number((wallet.cash + num).toFixed(5));
    wallet.save()

    return new WalletDto(wallet);
  }

  async decrement(userId, count) {
    const wallet = await WalletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    const num = parseFloat(count);
    wallet.cash = Number((wallet.cash - num).toFixed(5));
    wallet.save();

    return new WalletDto(wallet);
  }

  async createWallet(userId) {
    const wallet = await WalletModel.create({ user: userId })

    return new WalletDto(wallet);
  }

  async findWallet(userId) {
    const wallet = await WalletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    return new WalletDto(wallet);
  }
}

export default new WalletService();