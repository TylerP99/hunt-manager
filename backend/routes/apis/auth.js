const express = require("express");
const router = express.Router();
const {loginLimiter} = require("../../middleware/rateLimiter");
const { authenticateUser, refreshUser, logoutUser } = require("../../controllers/auth-controller");

router.post("/authenticate", loginLimiter, authenticateUser);
router.get("/refresh", refreshUser);
router.delete("/logout", logoutUser);

module.exports = router;