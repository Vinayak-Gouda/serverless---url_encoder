import urlRepository from "../repositories/url.repository.js";
import { generateCode } from "../utils/generateCode.js";

class UrlService {
    async createShortUrl(longUrl) {
        console.log("longUrl...",longUrl)
        const shortCode = generateCode();

        return urlRepository.create({
            longUrl,
            shortCode
        });
    }

    async getOriginalUrl(shortCode) {
        return urlRepository.findByCode(shortCode);
    }
}

export default new UrlService();