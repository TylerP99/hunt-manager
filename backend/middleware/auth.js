const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");

const User = require("../models/User");


module.exports = {

    protectRoute: (req, res, next) => {
        // Get auth headers
        const authHeader = req.headers.authorization || req.headers.Authorization;

        // Check if there is a token
        const token = (authHeader && authHeader.startsWith("Bearer")) ? authHeader.split(" ")[1] : null;

        // If there was not a token, respond
        if(!token) return res.status(401).json([{msg: "Not authorized, no token"}]);

        // Decode token
        jwt.verify(token, process.env.JWT_ACCESS_SECRET, 
            (err, decoded) => {
                // If token is invalid, respond
                if(err) return res.status(401).json([{msg: "Not authorized"}]);

                // Set user
                req.user = decoded.user;

                // Do next thingy
                next();
        });
    },

};