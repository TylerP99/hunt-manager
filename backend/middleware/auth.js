const jwt = require("jsonwebtoken");

const User = require("../models/User");


module.exports = {

    authProtect: async (req, res, next) => {
        let token;

        if( req.headers.authorization && req.headers.authorization.startsWith("Bearer") ) {
            try {
                token = req.headers.authorization.split(" ")[1]; // Token comes after "Bearer (ie: Bearer tokenDataHere")

                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                req.user = await User.findById(decoded.id).select("-password");

                next();
            }
            catch(e) {
                console.error(e);
                res.status(401);
                throw new Error("Not authorized");
            }
        }

        if(!token) {
            res.status(401);
            throw new Error("Not authorized, no token");
        }
    },

};