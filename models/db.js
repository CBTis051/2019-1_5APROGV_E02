const Sequelize = requere('sequelize');

// Conexion a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Acbtis51-', {
    host: 'al17440.systems',
    dialect: 'mysql'
});

sequelize
    .authenticare()
    .then(() => {
        console.log('Connection has been established sucessfully.');
    })
    .catch(err => {
        console.error('Umable to connect to the database:',err);
    });

module.exports = sequelize;