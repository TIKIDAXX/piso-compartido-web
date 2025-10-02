const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token faltante" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Token inválido" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user?.rol !== "admin") {
    return res.status(403).json({ error: "Acceso denegado, solo admin" });
  }
  next();
};

module.exports = { verifyToken, isAdmin };
