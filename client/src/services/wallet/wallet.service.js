import $api from "@/http";

export default class WalletService {
  static async increment(userId, count) {
    return $api.post('wallet/increment', { userId, count })
  }

  static async decrement(userId, count) {
    return $api.post('wallet/decrement', { userId, count })
  }
}