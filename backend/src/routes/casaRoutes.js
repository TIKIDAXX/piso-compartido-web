const express = require("express");
const router = express.Router();
const { crearCasa, listarCasas, obtenerCasa } = require("../controllers/casaController");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, isAdmin, crearCasa);
router.get("/", verifyToken, listarCasas);
router.get("/:id", verifyToken, obtenerCasa);

module.exports = router;
