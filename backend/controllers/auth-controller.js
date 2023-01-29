const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");

/*
    @desc:    Authenticates a user and grants a token
    @route:   POST /api/auth/authenticate
    @access:  Private
*/