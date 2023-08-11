import { validationResult } from "express-validator";
import ApiError from "../exceptions/api.error.js";
import CollectionService from '../service/collection.service.js'

class CollectionController {
  async create(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const owner = req.user;
      const { name, nfts } = req.body;

      const collectionId = await CollectionService.create(name, owner, nfts);

      return res.json(collectionId);
    } catch (e) {
      next(e);
    }
  }

  async getCollection(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const { id } = req.body;

      const collectionData = await CollectionService.getCollection(id);

      return res.json(collectionData);
    } catch (e) {

    }
  }
}

export default new CollectionController;

