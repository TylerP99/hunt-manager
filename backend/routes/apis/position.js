const express = require("express");
const router = express.Router();

const PositionController = require("../../controllers/position-controller");
const { protectRoute } = require("../../middleware/auth");

router.get("/", protectRoute, PositionController.get_position_handler);
router.post("/", protectRoute, PositionController.create_position_handler);
router.put("/:id", protectRoute, PositionController.update_position_handler);
router.delete("/:id", protectRoute, PositionController.delete_position_handler);


module.exports = router;