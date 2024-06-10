const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        const error = new Error('Token non fornito');
        error.status = 401;
        throw error;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            const error = new Error('Token non valido');
            error.status = 403;
            throw error;
        }
        req.user = data;
        next();
    });

}