const Categoria = require("./categoria");
const Contenido = require("./contenido");
const Actor = require("./actor");
const Genero = require("./genero");
const ContenidoActor = require("./contenido-actores")
const ContenidoGenero = require("./contenido-genero")

Contenido.belongsTo(Categoria, { foreignKey: 'CategoriaId', as: 'Categoria' });
Categoria.hasMany(Contenido, { foreignKey: 'CategoriaId', as: 'Contenidos' });

Contenido.belongsToMany(Actor, { through: ContenidoActor, foreignKey: 'ContenidoId', as: 'Actores' });
Actor.belongsToMany(Contenido, { through: ContenidoActor, foreignKey: 'ActorId', as: 'Contenidos' });


Contenido.belongsToMany(Genero, { through: ContenidoGenero, foreignKey: 'ContenidoId', as: 'Generos' });
Genero.belongsToMany(Contenido, { through: ContenidoGenero, foreignKey: 'GeneroId', as: 'Contenidos' });

module.exports = { Contenido, Categoria, Actor, Genero };