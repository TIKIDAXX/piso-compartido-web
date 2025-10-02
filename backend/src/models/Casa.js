const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Casa = sequelize.define("Casa", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  admin_id: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Casa;
