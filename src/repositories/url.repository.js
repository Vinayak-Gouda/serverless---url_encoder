import Url from "../models/url.model.js";

class UrlRepository {
    async create(data) {
        return Url.create(data);
    }

    async findByCode(shortCode) {
        return Url.findOne({
            where: { shortCode }
        });
    }
}

export default new UrlRepository();