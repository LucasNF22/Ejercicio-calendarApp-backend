const express = require("express");


// Crear el servidor de express
const app = express();

// Rutas
app.get('/', ( req, res ) => {
    console.log('se requiere el /');
    res.json({
        ok: true
    })
});



// Escuchar peticiones 
const puertoServer = 4000;
app.listen( puertoServer, () => {
    console.log(`Servidor corriendo en el puerto ${puertoServer}`);

});