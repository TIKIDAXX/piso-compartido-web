const express = require("express");
const router = express.Router();
const { marcarCompra, verificarCompra } = require("../controllers/compraController");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, marcarCompra);
router.put("/verificar/:id", verifyToken, isAdmin, verificarCompra);

module.exports = router;
