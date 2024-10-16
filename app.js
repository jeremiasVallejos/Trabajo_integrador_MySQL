const express = require("express");
const app = express();
const router = require('./routes/routes')
const sequelize = require("./conexion/database");
const { Contenido, Categoria, Actor, Genero } = require("./models/associations");

app.use(async (req, res, next) => {
  try {
    await sequelize.sync({ force: false });
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});
app.use(express.json());
app.use("/contenido", router);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});