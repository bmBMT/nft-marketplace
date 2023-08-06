import userService from "../service/user.service.js";
import { validationResult } from 'express-validator'
import ApiError from "../exceptions/api.error.js";

class UserController {
  async getUser(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const { id } = req.body;

      const data = await userService.getUser(id);

      return res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async follow(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const user = req.user;
      const { id } = req.body;
      const userData = await userService.follow(id, user.id);
      return res.json(userData);

    } catch (e) {
      next(e)
    }
  }

  async unfollow(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const user = req.user;
      const { id } = req.body;
      const userData = await userService.unfollow(id, user.id);
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }

  async changeAvatar(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const user = req.user;
      const { nftId } = req.body;

      const avatarLink = await userService.changeAvatar(nftId, user.id);

      return res.json(avatarLink)
    } catch (e) {
      next(e)
    }
  }

  async changePlaceholder(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const user = req.user;
      const { nftId } = req.body;

      const placeholderLink = await userService.changePlaceholder(nftId, user.id);

      return res.json(placeholderLink)
    } catch (e) {
      next(e)
    }
  }
}

export default new UserController;