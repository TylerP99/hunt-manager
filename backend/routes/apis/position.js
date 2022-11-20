const express = require("express");
const router = express.Router();

const PositionController = require("../../controllers/position-controller");
const { authProtect } = require("../../middleware/auth");

router.get("/", authProtect, PositionController.get_position_handler);
router.post("/", authProtect, PositionController.create_position_handler);
router.put("/:id", authProtect, PositionController.update_position_handler);
router.delete("/:id", authProtect, PositionController.delete_position_handler);


module.exports = router;