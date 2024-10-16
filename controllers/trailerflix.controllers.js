
const ContenidoActor = require("../models/contenido-actores");
const ContenidoGenero = require("../models/contenido-genero");
const { Contenido, Categoria, Actor, Genero } = require("../models/associations");


const getAllContent = async (req, res) => {
  try {
    const allContent = await Contenido.findAll({
      include: [{
        model: Categoria,
        as: 'Categoria'
      },
      {
        model: Genero,
        as: 'Generos',
      },
      {
        model: Actor,
        as: 'Actores',
      }]
    }
    );

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
      include: [{
        model: Categoria,
        as: 'Categoria'
      },
      {
        model: Genero,
        as: 'Generos',
      },
      {
        model: Actor,
        as: 'Actores',
      }]
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
      include: [{
        model: Categoria,
        as: 'Categoria'
      },
      {
        model: Genero,
        as: 'Generos',
      },
      {
        model: Actor,
        as: 'Actores',
      }]
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
    const { titulo, CategoriaId, resumen, temporadas, poster, actores = [], generos = [] } = req.body;

    // Verificar si se proporcionaron los datos obligatorios
    if (!titulo || !CategoriaId) {
      return res.status(400).json({ message: "No se proporcionaron los datos requeridos" });
    }

    // Crear el contenido primero
    const nuevoContenido = await Contenido.create({
      titulo,
      CategoriaId,
      resumen,
      temporadas,
      poster,
    });

    // Manejar actores (si hay)
    if (actores.length > 0) {
      const createdActores = await Actor.bulkCreate(
        actores.map(nombre => ({ nombre })),
        { returning: true }
      );

      // Obtener los IDs de los actores recién creados
      const actorIds = createdActores.map(actor => actor.id);

      // Crear las relaciones en ContenidoActor
      await ContenidoActor.bulkCreate(
        actorIds.map(actorId => ({
          ContenidoId: nuevoContenido.id,
          ActorId: actorId,
        }))
      );
    }

    // Manejar géneros (si hay)
    if (generos.length > 0) {
      const createdGeneros = await Genero.bulkCreate(
        generos.map(nombre => ({ nombre })),
        { returning: true }
      );

      // Obtener los IDs de los géneros recién creados
      const generoIds = createdGeneros.map(genero => genero.id);

      // Crear las relaciones en ContenidoGenero
      await ContenidoGenero.bulkCreate(
        generoIds.map(generoId => ({
          ContenidoId: nuevoContenido.id,
          GeneroId: generoId,
        }))
      );
    }

    return res.status(200).json({ message: "El contenido se creó exitosamente" });

  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al crear el contenido.");
  }
};


const updateContentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, CategoriaId, resumen, temporadas, poster, actores = [], generos = [] } = req.body;

    // Verificar si el contenido existe
    const contentById = await Contenido.findOne({
      where: { id: parseInt(id) },
    });

    if (!contentById) {
      return res.status(404).json({
        message: `No se encontró ningún contenido con este id ${id}`,
      });
    }

    // Actualizar el contenido principal
      await Contenido.update(
      { titulo, CategoriaId, resumen, temporadas, poster }, 
      { where: { id: parseInt(id) } }
    );

    // Actualizar actores (borrar los actuales y agregar los nuevos)
    if (actores.length > 0) {
      // Eliminar actores actuales relacionados con el contenido
      await ContenidoActor.destroy({ where: { ContenidoId: parseInt(id) } });

      // Crear nuevas relaciones con los actores proporcionados
      const createdActores = await Actor.bulkCreate(
        actores.map(nombre => ({ nombre })),
        { returning: true }
      );
      const actorIds = createdActores.map(actor => actor.id);

      await ContenidoActor.bulkCreate(
        actorIds.map(actorId => ({
          ContenidoId: parseInt(id),
          ActorId: actorId,
        }))
      );
    }

    // Actualizar géneros (borrar los actuales y agregar los nuevos)
    if (generos.length > 0) {
      // Eliminar géneros actuales relacionados con el contenido
      await ContenidoGenero.destroy({ where: { ContenidoId: parseInt(id) } });

      // Crear nuevas relaciones con los géneros proporcionados
      const createdGeneros = await Genero.bulkCreate(
        generos.map(nombre => ({ nombre })),
        { returning: true }
      );
      const generoIds = createdGeneros.map(genero => genero.id);

      await ContenidoGenero.bulkCreate(
        generoIds.map(generoId => ({
          ContenidoId: parseInt(id),
          GeneroId: generoId,
        }))
      );
    }

    return res.status(200).json({
      message: `El contenido con id ${id} ha sido actualizado exitosamente.`,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al actualizar el contenido.");
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
