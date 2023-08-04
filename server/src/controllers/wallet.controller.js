import ApiError from "../exceptions/api.error.js";
import walletService from "../service/wallet.service.js";

class WalletController {
  async increment(req, res, next) {
    try {
      const { userId, count } = req.body;
      const walletData = await walletService.increment(userId, count);
      return res.json(walletData);
    } catch (e) {
      next(e);
    }
  }

  async decrement(req, res, next) {
    try {
      const { userId, count } = req.body;
      const walletData = await walletService.decrement(userId, count);
      return res.json(walletData);
    } catch (e) {
      next(e);
    }
  }
}

export default new WalletController;