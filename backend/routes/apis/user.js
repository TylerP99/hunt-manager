const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");

const { protectRoute } = require("../../middleware/auth");

router.post("/create", UserController.createUser);

router.get("/getUser", protectRoute, UserController.getUser);

module.exports = router;