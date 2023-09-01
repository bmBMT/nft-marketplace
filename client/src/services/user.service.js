
import $api from "@/http/index.js";

export default class UserService {
  static async getUser(id) {
    return $api.post('/user/getUser', { id });
  }

  static async follow(id) {
    return $api.post('/user/follow', { id });
  }

  static async unfollow(id) {
    return $api.post('/user/unfollow', { id });
  }

  static async changeAvatar(nftId) {
    return $api.post('/user/changeAvatar', { nftId });
  }
}