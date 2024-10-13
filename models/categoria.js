const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Categoria = sequelize.define('categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'categoria',
    timestamps: false
});

module.exports = Categoria;