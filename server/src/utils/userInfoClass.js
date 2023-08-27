export default class UserInfoClass {
  id;
  avatar;
  username;

  constructor(model) {
      this._id = model._id;
      this.avatar = model.avatar.path;
      this.username = model.username;
  }
}