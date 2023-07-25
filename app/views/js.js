export default async ({ req, res, log }) => {
    switch (req.body) {
        case 'send':
            return res.send(
                "This is a text response", 
                200, 
                {
                    "content-type": "application/text"
                }
            );
        case 'json':
            return res.json(
                {
                    "type": "This is a JSON response"
                }, 
                200, 
                {
                    "content-type": "application/json"
                }
            );
        case 'redirect':
            return res.json(
                "https://appwrite.io", 
                301, 
                {
                    "content-type": "application/json"
                }
            );
        default:
            return res.empty();
    }
};