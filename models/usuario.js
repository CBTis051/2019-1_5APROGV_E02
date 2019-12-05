const Sequelize = require('sequelize');
const sequelize = require('../models/db');

const Usuario = sequelize.define('usuario', {
        // atrributes
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rol: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        // options
        // Para que no busques los campor createdAt, updatedAt
        timestamps: false,
        defaultScope: {
            attributes: { exclude: ['password']},
        }

    }
);
module.exports = Usuario;