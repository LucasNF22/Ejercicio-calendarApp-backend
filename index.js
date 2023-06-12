const express = require("express");
require('dotenv').config();
const { dbConection } = require('./database/config')

// console.log(process.env);

// Crear el servidor de express
const app = express();

// Conexion a base de datos
dbConection();

// Dictorio Publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth'));


// TODO: CRUD -> eventos




// Escuchar peticiones 
const puertoServer = 4000;
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});