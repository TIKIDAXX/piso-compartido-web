const Casa = require("../models/Casa");
const Usuario = require("../models/Usuario");

const crearCasa = async (req, res) => {
  try {
    const { nombre, admin_id } = req.body;
    const casa = await Casa.create({ nombre, admin_id });
    res.json({ message: "Casa creada", casa });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarCasas = async (req, res) => {
  try {
    const casas = await Casa.findAll();
    res.json(casas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerCasa = async (req, res) => {
  try {
    const casa = await Casa.findByPk(req.params.id);
    if (!casa) return res.status(404).json({ error: "Casa no encontrada" });
    res.json(casa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { crearCasa, listarCasas, obtenerCasa };
