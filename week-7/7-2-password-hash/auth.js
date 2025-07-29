import jwt from 'jsonwebtoken';

export const JWT_SECRET = "legionSecret";

export function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    console.log(decodedData);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(400).json({
            message: "Incorrect Credentials"
        });
    }
}