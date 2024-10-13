const Categoria = require("../models/categoria");
const Contenido = require("../models/contenido");
const ContenidoGenero = require("../models/contenido-genero");

const getAllContent = async (req, res) => {
  try {
   const allContent = await Contenido.findAll()

   if(!allContent){
    return res.status(404).json({message: 'No hay contenido'})
   }

   return res.status(200).json(allContent)

  } catch (error) {
    console.error(error);
    res.status(500).send('Ocurrió un error al obtener los contenidos.');
  }
};


const getContentById = (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrió un error al obtener los contenidos.');
  }
};

const addNewContent = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrió un error al obtener los contenidos.');
  }
};

const updateContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrió un error al obtener los contenidos.');
  }
};

const deleteContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrió un error al obtener los contenidos.');
  }
};


module.exports = { getAllContent, getContentById, addNewContent, updateContentById, deleteContentById}