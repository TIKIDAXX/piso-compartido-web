const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Compra = sequelize.define("Compra", {
  producto_id: { type: DataTypes.INTEGER, allowNull: false },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  casa_id: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  foto_ticket: { type: DataTypes.STRING, allowNull: true },
  verificado: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Compra;
