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
      const { name, description, categorie, tags, price } = req.body;
      const { img } = req.files;

      console.log(img);

      // const userData = await nftService.create(name, img, user.id, description, categorie, tags, price);

      // return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async buy(req, res, next) {
    try {
      const user = req.user;
      const { id } = req.body;

      const nftData = await nftService.buy(id, user.id);

      return res.json(nftData);
    } catch (e) {
      next(e);
    }
  }

  async changePrice(req, res, next) {
    try {
      const user = req.user;
      const { id, price } = req.body;

      const nftData = await nftService.changePrice(id, price, user.id);

      return res.json(nftData);
    } catch (e) {
      next(e);
    }
  }
}

export default new NftController;