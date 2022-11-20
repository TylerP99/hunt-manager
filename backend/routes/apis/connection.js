const express = require("express");
const router = express.Router();

const ConnectionController = require("../../controllers/connection-controller");
const { authProtect } = require("../../middleware/auth");

router.get("/", authProtect, ConnectionController.get_connections_handler);
router.post("/", authProtect, ConnectionController.create_connection_handler);
router.put("/:id", authProtect, ConnectionController.update_connection_handler);
router.delete("/:id", authProtect, ConnectionController.delete_connection_handler);


module.exports = router;