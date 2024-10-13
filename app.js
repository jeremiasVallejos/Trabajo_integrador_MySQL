const express = require("express");
const app = express();
const router = require('./routes/routes')
const db = require("./conexion/database");

// Middlewares
app.use(express.json());
app.use("/contenido", router);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});