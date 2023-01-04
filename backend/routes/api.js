const express = require("express");
const router = express.Router();


router.use("/companies", require("./apis/company.js"));

router.use("/connections", require("./apis/connection.js"));

router.use("/positions", require("./apis/position.js"));

router.use("/users", require("./apis/user.js"));


module.exports = router;