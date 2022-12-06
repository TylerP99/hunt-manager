const express = require("express");
const router = express.Router();

const ConnectionController = require("../../controllers/connection-controller");
const { protectRoute } = require("../../middleware/auth");

router.get("/", protectRoute, ConnectionController.get_connections_handler);
router.post("/", protectRoute, ConnectionController.create_connection_handler);
router.put("/:id", protectRoute, ConnectionController.update_connection_handler);
router.delete("/:id", protectRoute, ConnectionController.delete_connection_handler);


module.exports = router;