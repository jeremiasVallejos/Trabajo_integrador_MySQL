const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');
const Contenido = require('./contenido');
const Genero = require('./genero');

const ContenidoGenero = sequelize.define('ContenidoGenero', {
    ContenidoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenido, // Referencio al modelo Contenido
            key: 'id'
        },
        field: 'contenido_id' // Nombre de la columna en la base de datos
    },
    GeneroId: {
        type: DataTypes.INTEGER,
        references: {
            model: Genero, // ReferencioS al modelo Genero
            key: 'id'
        },
        field: 'genero_id' // Nombre de la columna en la base de datos
    }
}, {
    tableName: 'ContenidoGenero',
    timestamps: false
});

module.exports = ContenidoGenero;