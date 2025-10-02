const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");
const casaRoutes = require("./routes/casaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/casas", casaRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando 👌");
});

module.exports = app;
