const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Contenido = sequelize.define('contenido', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resumen: {
        type: DataTypes.TEXT
    },
    temporadas: {
        type: DataTypes.STRING
    },
    poster: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'contenido',
    timestamps: false
});

module.exports = Contenido;