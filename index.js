const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { dbConection } = require('./database/config')
const path = require('path');

// console.log(process.env);

// Crear el servidor de express
const app = express();

// Conexion a base de datos
dbConection();

// CORS
app.use(cors());

// Dictorio Publico
// app.use( express.static('public') );
app.use(express.static(path.join(__dirname, 'public')))

const url = path.join(__dirname, 'public')
console.log(url);

// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// app.get('/*', (req, res)=> {
//     res.sendFile( __dirname + '/public/index.html' );
// })
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




// Escuchar peticiones 

// const puertoServer = 4000;
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});