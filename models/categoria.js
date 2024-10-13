const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Categoria = sequelize.define('Categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Categoria',
    timestamps: false
});

module.exports = Categoria;