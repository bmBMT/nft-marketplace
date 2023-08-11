import ApiError from '../exceptions/api.error.js'
import CollectionModel from '../models/collection.model.js'
import CollectionDto from '../dtos/collection.dto.js'

class CollectionService {
  async create(name, owner, nfts) {
    const candidate = await CollectionModel.findOne({ name });
    if (candidate) {
      throw ApiError.BadRequest('Collection with this name already exists');
    }

    const collection = await CollectionModel.create({ name, owner, nfts });

    return collection._id
  }

  async getCollection(id) {
    const collection = await CollectionModel.findById(id);
    if (!collection) {
      throw ApiError.BadRequest('This collection does not exist');
    }

    return new CollectionDto(collection);
  }
}

export default new CollectionService();