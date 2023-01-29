const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const AsyncHandler = require("express-async-handler");

/*
    @desc:    Authenticates a user and grants a token
    @route:   POST /api/auth/authenticate
    @access:  Public
*/
const authenticateUser = AsyncHandler( async (req, res) => {
    console.log("Authenticate user");
});

/*
    @desc:    Refreshes a users access token
    @route:   GET /api/auth/refresh
    @access:  Public
*/
const refreshUser = AsyncHandler( async (req, res) => {
    console.log("Refresh user");
});

/*
    @desc:    Logs a user out and deletes their refresh token
    @route:   DELETE /api/auth/logout
    @access:  Private
*/
const logoutUser = AsyncHandler( async (req, res) => {
    console.log("Logout user");
});

