const jwt = require("jsonwebtoken"); //verifies jwt tokens sent by users

const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({  //401: unauthorized
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        
    req.user = decoded;

    next();  //without next() requests gets stuck

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }

};

module.exports = protect;