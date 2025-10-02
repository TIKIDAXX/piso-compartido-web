const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TareaLimpieza = sequelize.define("TareaLimpieza", {
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  casa_id: { type: DataTypes.INTEGER, allowNull: false },
  dia_semana: { type: DataTypes.INTEGER, allowNull: false }, // 1=lunes..7=domingo
});

module.exports = TareaLimpieza;
