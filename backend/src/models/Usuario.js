const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

const Usuario = sequelize.define("Usuario", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  contraseña: { type: DataTypes.STRING, allowNull: false },
  rol: { type: DataTypes.STRING, defaultValue: "usuario" },
  casa_id: { type: DataTypes.INTEGER, allowNull: true },
  telegram_id: { type: DataTypes.STRING, allowNull: true },
});

Usuario.beforeCreate(async (usuario) => {
  usuario.contraseña = await bcrypt.hash(usuario.contraseña, 10);
});

module.exports = Usuario;
