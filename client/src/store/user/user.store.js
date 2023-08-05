import { makeAutoObservable } from "mobx";
import { AuthService, LocalStorage, NftService } from "@/services";
import axios from "axios";
import { API_URL } from "@/http";
import WalletService from "@/services/wallet/wallet.service";
import UserService from "@/services/user/user.service";

export default class UserStore {
  user = {};
  wallet = {};
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setWallet(wallet) {
    this.wallet = wallet;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      LocalStorage.set('token', response.data.accessToken)
      this.setIsAuth(true);
      this.setUser(response.data.user);
      this.setWallet(response.data.wallet);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async registration(username, email, password, img) {
    try {
      const response = await AuthService.registration(username, email, password, img);
      LocalStorage.set('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
      this.setWallet(response.data.wallet);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      LocalStorage.remove('token');
      this.setUser({});
      this.setWallet({});
      this.setIsAuth(false);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true })

      LocalStorage.set('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
      this.setWallet(response.data.wallet);
    } catch (e) {
      return e.response?.data?.message;
    } finally {
      this.setLoading(false);
    }
  }

  async addETH(count) {
    try {
      const response = await WalletService.increment(this.user.id, count);
      this.setWallet(response.data);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async subtractETH(count) {
    try {
      const response = await WalletService.decrement(this.user.id, count);
      this.setWallet(response.data);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async createNft(name, img, description, tags, price) {
    try {
      const response = await NftService.create(name, img, description, tags, price);
      this.setUser(response.data);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async buyNft(id) {
    try {
      const response = await NftService.buy(id);
      this.user = response.data;
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async changeNftPrice(id, price) {
    try {
      await NftService.changePrice(id, price);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async followUser(id) {
    try {
      const response = await UserService.follow(id);
      this.setUser(response.data)
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async unfollowUser(id) {
    try {
      const response = await UserService.unfollow(id);
      this.setUser(response.data)
    } catch (e) {
      return e.response?.data?.message;
    }
  }
}