import urlService from "../services/url.service.js";

export const handler = async (event) => {
    try {
        const { data } = JSON.parse(event.body)

        const url = await urlService.createShortUrl(data.longUrl);

        return {
            statusCode: 201,
            body: JSON.stringify({
                shortCode: url.shortCode
            })
        };

    } catch (error) {
        console.error("ERROR:", error);console.error("ERROR:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        };
    }
};