const express = require("express");
const app = express();

//const db = require("./conexion/database");

// Middlewares
app.use(express.json());
app.use("/contenido", (req, res) =>{
    res.send('hello')
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});