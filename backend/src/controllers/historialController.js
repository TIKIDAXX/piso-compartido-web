const Historial = require("../models/Historial");

const agregarHistorial = async (req, res) => {
  try {
    const { tipo, usuario_id, estado, foto_url, verificado_por } = req.body;
    const historial = await Historial.create({ tipo, usuario_id, estado, foto_url, verificado_por });
    res.json({ message: "Historial agregado", historial });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarHistorialPorCasa = async (req, res) => {
  try {
    const historial = await Historial.findAll({ where: { casa_id: req.params.casa_id } });
    res.json(historial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { agregarHistorial, listarHistorialPorCasa };
