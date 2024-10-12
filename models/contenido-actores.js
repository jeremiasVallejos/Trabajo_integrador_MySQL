const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const ContenidoActor = sequelize.define('ContenidoActor', {
    contenido_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Contenido',
        key: 'id'
    }
    },
    actor_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Actores',
        key: 'id'
    }
    }
}, {
    tableName: 'ContenidoActor',
    timestamps: false
});

module.exports = ContenidoActor;