const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const ContenidoGenero = sequelize.define('contenidogenero', {
 
}, {
    tableName: 'contenidogenero',
    timestamps: false,
});

module.exports = ContenidoGenero;
