import { makeAutoObservable } from "mobx";
import { AuthService, LocalStorage, NftService } from "@/services/index.js";
import axios from "axios";
import { API_URL } from "@/http/index.js";
import WalletService from "@/services/wallet.service.js";
import UserService from "@/services/user.service.js";

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

  setAvatar(avatarLink) {
    this.user.avatar = avatarLink;
  }

  pushToCreatedNft(nftId) {
    this.user.nft.created.push(nftId);
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

  async registration(username, email, password) {
    try {
      const response = await AuthService.registration(username, email, password);
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
      this.pushToCreatedNft(response.data);
      this.pushToOwnedNft(response.data);
    } catch (e) {
      return e.response?.data?.message;
    }
  }

  async buyNft(id) {
    try {
      const response = await NftService.buy(id);
      this.pushToOwnedNft(response.data);
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

  async changeAvatar(nftId) {
    try {
      const response = await UserService.changeAvatar(nftId);
      this.setAvatar(response.data);
    } catch (e) {
      return e.response?.data?.message;
    }
  }
}