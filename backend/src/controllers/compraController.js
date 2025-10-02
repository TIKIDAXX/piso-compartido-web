const Compra = require("../models/Compra");

const marcarCompra = async (req, res) => {
  try {
    const { producto_id, usuario_id, casa_id, foto_ticket } = req.body;
    const compra = await Compra.create({ producto_id, usuario_id, casa_id, foto_ticket });
    res.json({ message: "Compra registrada", compra });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const verificarCompra = async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
    compra.verificado = true;
    await compra.save();
    res.json({ message: "Compra verificada", compra });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { marcarCompra, verificarCompra };
