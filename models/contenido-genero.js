const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');
const Contenido = require('./contenido');
const Genero = require('./genero');

const ContenidoGenero = sequelize.define('contenidogenero', {
    ContenidoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenido,
            key: 'id'
        },
        field: 'ContenidoId',
        allowNull: false
    },
    GeneroId: {
        type: DataTypes.INTEGER,
        references: {
            model: Genero,
            key: 'id'
        },
        field: 'GeneroId',
        allowNull: false
    }
}, {
    tableName: 'contenidogenero',
    timestamps: false,
});

module.exports = ContenidoGenero;
