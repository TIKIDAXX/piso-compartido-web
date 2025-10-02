const express = require("express");
const router = express.Router();
const { crearProducto, listarProductos } = require("../controllers/productoController");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, isAdmin, crearProducto);
router.get("/:casa_id", verifyToken, listarProductos);

module.exports = router;
