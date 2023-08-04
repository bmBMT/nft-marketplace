import $api from "@/http";

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
}