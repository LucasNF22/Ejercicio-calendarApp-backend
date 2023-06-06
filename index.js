const express = require("express");
require('dotenv').config();

// console.log(process.env);

// Crear el servidor de express
const app = express();

// Dictorio Publico
app.use( express.static('public') );


// Rutas
// TODO: auth -> crear, login, renew
app.use('/api/auth', require('./routes/auth'));


// TODO: CRUD -> eventos




// Escuchar peticiones 
const puertoServer = 4000;
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});