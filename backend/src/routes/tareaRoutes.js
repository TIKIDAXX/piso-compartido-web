const express = require("express");
const router = express.Router();
const { asignarTarea, listarTareasPorCasa } = require("../controllers/tareaController");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, isAdmin, asignarTarea);
router.get("/:casa_id", verifyToken, listarTareasPorCasa);

module.exports = router;
