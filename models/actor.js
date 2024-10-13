const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Actor = sequelize.define('actor', {
    nombre: {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
    tableName: 'actor',
    timestamps: false
});

module.exports = Actor;