const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');
const Categoria = require('./categoria');

const Contenido = sequelize.define('contenido', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        },
        field: 'CategoriaId',
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