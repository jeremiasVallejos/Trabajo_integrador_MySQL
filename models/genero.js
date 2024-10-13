const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Genero = sequelize.define('genero', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'genero', 
    timestamps: false
});

module.exports = Genero;