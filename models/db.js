const Sequelize = require('sequelize');

//Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Equipo05.051-', {
    host: 'al17398.tech',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;