const jwt = require("jsonwebtoken");

const AuthenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if(!token) {
            return res.status(400).json({message: 'Token not found. Please Login.'})
        }

        const decoded = jwt.verify(token, 'myjwtsecret');
        req.user = decoded
        next();
    } catch(e) {
        return res.status(400).json({message: 'Token Expired. Please Login Again.'});
    }
}


module.exports = {
    AuthenticateUser
}