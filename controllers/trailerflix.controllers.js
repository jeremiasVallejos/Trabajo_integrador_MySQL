const Categoria = require("../models/categoria");
const Contenido = require("../models/contenido");
const ContenidoGenero = require("../models/contenido-genero");

const getAllContent = async (req, res) => {
  try {
    const allContent = await Contenido.findAll();

    if (!allContent) {
      return res.status(404).json({ message: "No hay contenido" });
    }

    return res.status(200).json(allContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const getContentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "No se proporcionaron los datos" });
    }

    const contentById = await Contenido.findOne({
      where: { id: parseInt(id) },
    });
    if (!contentById) {
      return res
        .status(404)
        .json({ message: `No se encontro el contenido con el id ${id}` });
    }

    return res.status(200).json(contentById);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const getContentByTitle = async (req, res) =>{
  try {
    const { title } = req.params;
    if (!title) {
      return res
        .status(400)
        .json({ message: "No se proporcionaron los datos" });
    }

    const contentByTitle = await Contenido.findOne({
      where: { titulo: title },
    });
    if (!contentByTitle) {
      return res
        .status(404)
        .json({ message: `No se encontro el contenido con el titulo ${title}` });
    }

    return res.status(200).json(contentByTitle);
  } catch (error) {
    
  }
}

const addNewContent = async (req, res) => {
  try {
    const { titulo, categoria, resumen, temporadas, poster } = req.body;
    if (!titulo || !categoria) {
      return res
        .status(400)
        .json({ message: "No se proporcionaron los datos" });
    }

    const creteContent = await Contenido.create({
      titulo,
      categoria,
      resumen,
      temporadas,
      poster,
    });

    console.log(creteContent)
    return res.json(creteContent)
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const updateContentById = (req, res) => {
  try {
    const { contenidoID } = req.params;
    const { titulo, categoria, resumen, temporadas, poster, genero } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const deleteContentById = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

module.exports = {
  getAllContent,
  getContentById,
  getContentByTitle,
  addNewContent,
  updateContentById,
  deleteContentById,
};
