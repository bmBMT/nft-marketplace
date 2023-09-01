import { validationResult } from "express-validator";
import nftService from "../service/nft.service.js";
import ApiError from "../exceptions/api.error.js";

class NftController {
  async create(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const user = req.user;
      const { name, description, category, tags = [], price } = req.body;
      const { img } = req.files;

      const nftId = await nftService.create(name, img, user.id, description, category, tags, price);

      return res.json(nftId);
    } catch (e) {
      next(e);
    }
  }

  async buy(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const user = req.user;
      const { id } = req.body;

      const nftId = await nftService.buy(id, user.id);

      return res.json(nftId);
    } catch (e) {
      next(e);
    }
  }

  async getNft(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const { id } = req.body;

      const nftData = await nftService.getNft(id);

      return res.json(nftData);
    } catch (e) {
      next(e)
    }
  }

  async getNfts(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const { ids } = req.body;

      const nftsData = await nftService.getNfts(ids);

      return res.json(nftsData);
    } catch (e) {
      next(e)
    }
  }

}

export default new NftController;