const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
    @desc:    Authenticates a user and grants a token
    @route:   POST /api/auth/authenticate
    @access:  Public
*/
const authenticateUser = AsyncHandler( async (req, res) => {
    console.log("Authenticate user");

    // Get login data from request
    const { email, password } = req.body;

    // Verify data is present
    if(!email || !password) return res.status(400).json({message: "All fields are required"});

    // Check if email exists
    const user = await User.find({email: email});

    if(!user) return res.status(401).json({message: "That email was not found"});

    // Check if password is correct
    const valid = await bcrypt.compare(password, user.password);

    if(!valid) return res.status(401).json({message: "That password was incorrect"});

    // Gen refresh token
    const refreshToken = genRefreshToken({
        userID: user._id,
        username: user.username,
        email: user.email,
    });

    // Gen access token
    const accessToken = genAccessToken({
        userID: user._id,
        username: user.username,
        email: user.email,
    });

    // Store refresh in httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 1*24*60*60*1000,
    })

    res.status(200).json({
        user: {
            username: user.username,
            email: user.email,
        },
        accessToken: accessToken,
    });
});

/*
    @desc:    Refreshes a users access token
    @route:   GET /api/auth/refresh
    @access:  Public
*/
const refreshUser = AsyncHandler( async (req, res) => {
    console.log("Refresh user");

    const refreshToken = req.cookies?.refreshToken;

    // Check for cookie
    if(!refreshToken) return res.status(401).json({message: "Not authorized, no refresh token"});

    // Verify cookie is good
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({message: "Not authorized"});

        const accessToken = accessToken({
            userID: decoded.userID,
            username: decoded.username,
            email: decoded.email,
        })

        return res.status(200).json({ accessToken });
    })

    return;
});

/*
    @desc:    Logs a user out and deletes their refresh token
    @route:   DELETE /api/auth/logout
    @access:  Public
*/
const logoutUser = AsyncHandler( async (req, res) => {
    console.log("Logout user");
    // Clear refresh token cookie if it exists
    res.clearCookie("refreshToken");
    return res.status(200).json({message: "Success"});
});

/*
    @desc:    Creates a json web token that holds some passed data, for the purpose of use as a refresh token for allowing the generation of access tokens
    @params:  data - An object containing data to be stored within the JWT
    @returns: The signed JWT containing "data" that will expire in one day
*/
const genRefreshToken = (data) => {
    if(typeof data !== "object") throw(new Error("data must be an object"));
    return jwt.sign(data, process.env.JWT_REFRESH_SECRET, {expiresIn: "1d"});
}

const genAccessToken = (data) => {
    if(typeof data !== "object") throw(new Error("data must be an object"));
    return jwt.sign(data, process.env.JWT_ACCESS_SECRET, {expiresIn: "15m"});
}

module.exports = {
    authenticateUser,
    refreshUser,
    logoutUser,
}