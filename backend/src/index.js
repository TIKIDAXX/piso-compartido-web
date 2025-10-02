const app = require("./app");
const sequelize = require("./config/db");

const Casa = require("./models/Casa");
const Usuario = require("./models/Usuario");
const TareaLimpieza = require("./models/TareaLimpieza");
const Producto = require("./models/Producto");
const Compra = require("./models/Compra");
const Historial = require("./models/Historial");

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Base de datos sincronizada ✔");
    app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
  })
  .catch((err) => console.log("Error DB:", err));
