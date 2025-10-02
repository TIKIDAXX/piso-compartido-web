const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Historial = sequelize.define("Historial", {
  tipo: { type: DataTypes.STRING, allowNull: false }, // limpieza/compra
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  estado: { type: DataTypes.STRING, allowNull: false },
  foto_url: { type: DataTypes.STRING, allowNull: true },
  verificado_por: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = Historial;
