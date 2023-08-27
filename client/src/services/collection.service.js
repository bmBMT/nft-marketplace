import $api from '@/http'

export default class CollectionService {
    static async getCollection(id) {
        return $api.post("collection/getCollection", { id })
    }
}