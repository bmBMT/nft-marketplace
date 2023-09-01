import $api from "@/http/index.js";

export default class AuthService {
  static async login(email, password) {
    return $api.post('/auth/login', { email, password });
  }

  static async registration(username, email, password, img) {
    return $api.post('/auth/registration', { username, email, password, img });
  }

  static async logout() {
    return $api.post('/auth/logout');
  }
}