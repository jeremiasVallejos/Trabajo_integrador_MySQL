const Categoria = require("../models/categoria");

const getAllContent = async (req, res) => {
  try {
    const getCategory = await Categoria.findAll()

    if(!getCategory.length){
      return res.send('No hay categorias creadas')
    }
    return res.json(getCategory)
  } catch (error) {
    console.log(error);
  }
};

const getContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const addNewContent = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const updateContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};


module.exports = { getAllContent, getContentById, addNewContent, updateContentById, deleteContentById}