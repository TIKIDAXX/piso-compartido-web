const TareaLimpieza = require("../models/TareaLimpieza");

const asignarTarea = async (req, res) => {
  try {
    const { usuario_id, casa_id, dia_semana } = req.body;
    const tarea = await TareaLimpieza.create({ usuario_id, casa_id, dia_semana });
    res.json({ message: "Tarea asignada", tarea });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarTareasPorCasa = async (req, res) => {
  try {
    const tareas = await TareaLimpieza.findAll({ where: { casa_id: req.params.casa_id } });
    res.json(tareas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { asignarTarea, listarTareasPorCasa };
