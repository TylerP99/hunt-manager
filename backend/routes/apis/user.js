const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");

const { authProtect } = require("../../middleware/auth");

router.post("/create", UserController.createUser);

router.post("/authenticate", UserController.authenticateUser);

router.get("/getUser", authProtect, UserController.getUser);

module.exports = router;