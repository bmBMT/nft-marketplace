import $api from "@/http/index.js";

export default class NftService {
  static async create(name, img, description, tags, price) {
    return $api.post('/nft/create', { name, img, description, tags, price })
  }

  static async buy(id) {
    return $api.post('/nft/buy', { id })
  }

  static async getNft(id) {
    return $api.post('/nft/getNft', { id })
  }
}