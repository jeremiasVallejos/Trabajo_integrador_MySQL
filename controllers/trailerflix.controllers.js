const Categoria = require("../models/categoria");
const Contenido = require("../models/contenido");
const ContenidoActor = require("../models/contenido-actores");
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

const getContentByTitle = async (req, res) => {
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
        .json({
          message: `No se encontro el contenido con el titulo ${title}`,
        });
    }

    return res.status(200).json(contentByTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const addNewContent = async (req, res) => {
  try {
    const { titulo, categoria, resumen, temporadas, poster } = req.body;
    if (!titulo || !categoria) {
      return res
        .status(400)
        .json({ message: "No se proporcionaron los datos" });
    }

    await Contenido.create({
      titulo,
      categoria,
      resumen,
      temporadas,
      poster,
    });

    return res.status(200).json({ message: "Se creao el contenido exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const updateContentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, categoria, resumen, temporadas, poster } = req.body;

    const contentById = await Contenido.findOne({
      where: { id: parseInt(id) },
    });

    if (!contentById) {
      return res
        .status(404)
        .json({
          message: `No se encontro ningún contenido con este id ${contenidoID}`,
        });
    }

    const updateContent = await Contenido.update(
      { titulo, categoria, resumen, temporadas, poster }, // Campos a actualizar
      { where: { id: parseInt(id) } }
    );

    if (updateContent === 0) {
      return res.status(400).json({
        message: `No se pudo actualizar el contenido. Es posible que los datos no hayan cambiado.`,
      });
    }

    return res.status(200).json({
      message: `El contenido con id ${id} ha sido actualizado exitosamente.`,
    });

  
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los contenidos.");
  }
};

const deleteContentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar registros relacionados en ContenidoActor
    await ContenidoActor.destroy({
      where: {
        ContenidoId: parseInt(id),
      },
    });

    // Eliminar registros relacionados en ContenidoGenero
    await ContenidoGenero.destroy({
      where: {
        ContenidoId: parseInt(id),
      },
    });

    // Ahora eliminar el contenido principal
    const deleteContent = await Contenido.destroy({
      where: {
        id: parseInt(id),
      },
    });

    if (deleteContent === 0) {
      return res.status(400).json({
        message: `No se pudo eliminar el contenido.`,
      });
    }

    return res.status(200).json({
      message: "El contenido se eliminó satisfactoriamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al eliminar el contenido.");
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
