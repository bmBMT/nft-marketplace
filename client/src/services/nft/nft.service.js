import $api from "@/http";

export default class NftService {
  static async create(name, img, description, tags, price) {
    return $api.post('/nft/create', { name, img, description, tags, price })
  }

  static async buy(id) {
    return $api.post('/nft/buy', { id })
  }

  static async changePrice(id, price) {
    return $api.post('/nft/changePrice', { id, price })
  }
}