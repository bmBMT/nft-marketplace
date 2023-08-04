import WalletDto from "../dtos/wallet.dto.js";
import ApiError from "../exceptions/api.error.js";
import walletModel from "../models/wallet.model.js";

class WalletService {
  async increment(userId, count) {
    const wallet = await walletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    const num = parseFloat(count);
    wallet.cash = Number((wallet.cash + num).toFixed(5));
    wallet.save()

    const walletData = new WalletDto(wallet);

    return walletData;
  }

  async decrement(userId, count) {
    const wallet = await walletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    const num = parseFloat(count);
    wallet.cash = Number((wallet.cash - num).toFixed(5));
    wallet.save();

    const walletData = new WalletDto(wallet);

    return walletData;
  }

  async createWallet(userId) {
    const wallet = await walletModel.create({ user: userId })

    const walletData = new WalletDto(wallet);

    return walletData;
  }

  async findWallet(userId) {
    const wallet = await walletModel.findOne({ user: userId });
    if (!wallet) {
      throw ApiError.BadRequest('This wallet does not exist');
    }

    const walletData = new WalletDto(wallet);

    return walletData;
  }
}

export default new WalletService();