import urlService from "../services/url.service.js";

export const handler = async (event) => {

    try {

        const shortCode = event.pathParameters.shortCode;

        const url = await urlService.getOriginalUrl(shortCode);

        if (!url) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: "URL not found"
                })
            };
        }

        return {
            statusCode: 301,
            headers: {
                Location: url.longUrl
            }
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        };
    }
};