require('./config/config');

const express = require('express');
const mysql = require('mysql2'); 

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
app.use(bodyParser.json())

/**
 * Home del server --> /
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGV Equipo02"
    };
    res.send(objeto);
});
// Configuracion global de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
});