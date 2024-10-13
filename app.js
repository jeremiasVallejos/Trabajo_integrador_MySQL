const express = require("express");
const app = express();
const router = require('./routes/routes')
const db = require("./conexion/database");
const Contenido = require("./models/contenido");
const Genero = require("./models/genero");
const ContenidoGenero = require("./models/contenido-genero");

// Middlewares

Contenido.belongsToMany(Genero, { through: ContenidoGenero, foreignKey: 'ContenidoId' });
Genero.belongsToMany(Contenido, { through: ContenidoGenero, foreignKey: 'GeneroId' });

app.use(express.json());
app.use("/contenido", router);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});