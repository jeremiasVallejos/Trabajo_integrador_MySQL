const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Categoria = sequelize.define('Categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Categorias',
    timestamps: false
});

module.exports = Categoria;