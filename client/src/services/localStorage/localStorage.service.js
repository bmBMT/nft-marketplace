export default class LocalStorage {
  static get(key) {
    return localStorage.getItem(key);
  };
  static set(key, value) {
    return localStorage.setItem(key, value);
  };
  static remove(key) {
    localStorage.removeItem(key)
  };
  static clear() {
    localStorage.clear();
  };
}