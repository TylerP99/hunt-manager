const express = require("express");
const router = express.Router();


router.use("/company", require("./apis/company.js"));

router.use("/connection", require("./apis/connection.js"));

router.use("/position", require("./apis/position.js"));

router.use("/user", require("./apis/user.js"));


module.exports = router;