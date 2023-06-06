const express = require("express");
require('dotenv').config();

// console.log(process.env);

// Crear el servidor de express
const app = express();

// Dictorio Publico
app.use( express.static('public') );


// Rutas
// app.get('/', ( req, res ) => {
//     console.log('se requiere el /');
//     res.json({
//         ok: true
//     })
// });



// Escuchar peticiones 
const puertoServer = 4000;
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});