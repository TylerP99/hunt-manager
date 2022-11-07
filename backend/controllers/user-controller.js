const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User")

const UserController = {

    /*
    @desc:    
    @route:   
    @access:  
    */
    createUser: async (req, res, next) => {
        try{
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            };

            if(!user.username || !user.email || !user.password) {
                return res.status(400).json({"msg": "All fields required."});
            }

            if(user.password !== req.body.password2) {
                return res.status(400).json({"msg": "Passwords must match."});
            }

            const existing = await User.findOne({email: user.email});

            if(existing) return res.status(400).json({msg: "A user with that email already exists"});

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;

            const newUser = await User.create(user);

            if(!newUser) return res.status(400).json({msg: "Uh oh?"})

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                token: UserController.genJWT(newUser._id),
            });
        }
        catch(e){
            console.error(e);
            next(e);
        }

    },

    /*
    @desc:    
    @route:   
    @access:  
    */
    authenticateUser: async (req, res, next) => {
        try {
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

            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: UserController.genJWT(user._id),
            })
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:    
    @route:   
    @access:  
    */
    getUser: (req, res, next) => {

    },

    /*
    @desc:     
    @params:   
    @returns:  
    */
    genJWT: (id) => {
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
    },

};

module.exports = UserController;