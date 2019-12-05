const express = require('express');

const app = express();

// Archivo de rutas
app.use(require('./home'));

module.exports = app;
