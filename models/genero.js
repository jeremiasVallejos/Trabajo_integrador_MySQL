const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Generos', 
    timestamps: false
});

module.exports = Genero;