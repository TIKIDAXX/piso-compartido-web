const Producto = require("../models/Producto");

const crearProducto = async (req, res) => {
  try {
    const { nombre, casa_id } = req.body;
    const producto = await Producto.create({ nombre, casa_id });
    res.json({ message: "Producto creado", producto });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({ where: { casa_id: req.params.casa_id } });
    res.json(productos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { crearProducto, listarProductos };
