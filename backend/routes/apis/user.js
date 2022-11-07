const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");

router.post("/create", UserController.createUser);

router.post("/authenticate", UserController.authenticateUser);

router.get("/getUser", UserController.getUser);

module.exports = router;