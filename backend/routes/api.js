const express = require("express");
const router = express.Router();


router.use("/company", require("./apis/company.js"));

router.use("/connection", require("./apis/connection.js"));

router.use("/position", require("./apis/position.js"));


module.exports = router;