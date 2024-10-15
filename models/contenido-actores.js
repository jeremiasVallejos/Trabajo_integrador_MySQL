const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const ContenidoActor = sequelize.define('contenidoactor', {
    ContenidoId: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Contenido',
        key: 'id'
    }
    },
    ActorId: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Actor',
        key: 'id'
    }
    }
}, {
    tableName: 'contenidoactor',
    timestamps: false
});

module.exports = ContenidoActor;