const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AsyncHandler = require("express-async-handler");

const User = require("../models/User")

const UserController = {

    /*
    @desc:    Creates a new user in database, responding with errors or the user and jwt
    @route:   POST /api/user/create
    @access:  Public
    */
    createUser: AsyncHandler( async (req, res) => {
        // Get user info from request body
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };

        // If a field is missing, respond
        if(!user.username || !user.email || !user.password) {
            return res.status(400).json({"msg": "All fields required."});
        }

        // If password and confirmation don't match, respond
        if(user.password !== req.body.password2) {
            return res.status(400).json({"msg": "Passwords must match."});
        }

        // Check if a user with provided email exists, if one does, respond
        const existing = await User.findOne({email: user.email});
        if(existing) return res.status(400).json({msg: "A user with that email already exists"});

        // Hash user password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;

        // Store user in db
        const newUser = await User.create(user);

        // If a user isnt created, cry
        if(!newUser) return res.status(400).json({msg: "Uh oh?"});

        // Create refresh token
        const refresh = UserController.genRefreshToken({_id: newUser._id});

        // Store in httpOnly cookie
        res.cookie("refresh-token", refresh, 
        {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // Respond with token and user info
        res.status(201).json({
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
            token: UserController.genJWT(newUser._id),
        });
        
    }),

    /*
    @desc:    Verifies a user's credentials, sends back user info and auth token
    @route:   POST /api/user/authenticate
    @access:  Public
    */
    authenticateUser: AsyncHandler( async (req, res) => {
        const credentials = {
            email: req.body.email,
            password: req.body.password,
        };

        if(!credentials.email) return res.status(400).json({msg: "Email field required"});

        if(!credentials.password) return res.status(400).json({msg: "Password required"});

        const user = await User.findOne({email: credentials.email});

        if(!user) return res.status(400).json({"msg": "A user with that email does not exist"});

        const match = await bcrypt.compare(credentials.password, user.password);

        if(!match) return res.status(400).json({msg: "Incorrect password"});

        // Create refresh token
        const refresh = UserController.genRefreshToken({_id: user._id});

        // Store in httpOnly cookie
        res.cookie("refreshToken", refresh, 
        {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            user: {
                username: user.username,
                email: user.email,
            },
            token: UserController.genJWT(user._id),
        })
    }),

    refreshAccess: AsyncHandler( async (req, res) => {
        // Check if there is a token in cookies
        if(!req.cookies?.refreshToken) {
            return res.status(401).json([{msg: "Not authorized, no refresh token"}]);
        }

        // Get token from cookies
        const refreshToken = req.cookies.refreshToken;

        // Verify token
        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, 
            async (err, decoded) => {
                // Token invalid
                if(err) return res.status(401).json([{msg: "Not authorized"}]);

                // Token valid, make a new access token and respond
                const accessToken = UserController.genAuthToken(req.user._id);
                return res.json({token: accessToken});
            }
        );
    }),

    logoutUser: (req, res, next) => {
        res.clearCookie("refreshToken");
        res.status(200).json([{msg: "Success"}]);
    },

    /*
    @desc:    
    @route:   
    @access:  
    */
    getUser: (req, res, next) => {

    },

    /*
    @desc:     Generates a json web token for authorization
    @params:   id: id of the user attempting to generate token
    @returns:  json web token with id stored
    */
    genAuthToken: (id) => {
        return jwt.sign({id}, process.env.JWT_AUTH_SECRET, {
            expiresIn: "15m",
        });
    },

    /*
    @desc:     Generates a json web token for generating auth tokens
    @params:   id: id of the user attempting to generate token
    @returns:  json web token with id stored
    */
    genRefreshToken: (payload) => {
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "7d"});
    },

};

module.exports = UserController;