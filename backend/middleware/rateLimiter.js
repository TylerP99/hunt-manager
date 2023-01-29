const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
    windowMS: 60*1000, // 1 minute
    max: 6, // 6 attempts per time unit
    message: { message: "Too many log in attempts, please try again later"},
    handler: (req, res, next, options) => {
        res.status(options.statusCode).json(options.message);
    },
    standardHeaders: true,
    legacyHeaders: false,

});

module.exports = {
    loginLimiter,
}