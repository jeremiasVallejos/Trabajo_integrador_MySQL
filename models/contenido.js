const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Contenido = sequelize.define('Contenido', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.ENUM('Serie', 'Película'),
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
    tableName: 'Contenido',
    timestamps: false
});

module.exports = Contenido;