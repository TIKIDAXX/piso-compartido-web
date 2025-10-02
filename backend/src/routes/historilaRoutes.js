const express = require("express");
const router = express.Router();
const { agregarHistorial, listarHistorialPorCasa } = require("../controllers/historialController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, agregarHistorial);
router.get("/:casa_id", verifyToken, listarHistorialPorCasa);

module.exports = router;
