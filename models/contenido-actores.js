const sequelize = require('../conexion/database');

const ContenidoActor = sequelize.define('contenidoactor', {
  
}, {
    tableName: 'contenidoactor',
    timestamps: false
});

module.exports = ContenidoActor;