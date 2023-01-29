const express = require("express");
const router = express.Router();
const { authenticateUser, refreshUser, logoutUser } = require("../../controllers/auth-controller");

router.post("/authenticate", authenticateUser);
router.get("/refresh", refreshUser);
router.delete("/logout", logoutUser);

module.exports = router;