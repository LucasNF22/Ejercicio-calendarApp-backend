/*
    Rutas de usuario  / auth
    host + /api/auth

*/


const { Router } = require('express');
const { check, body } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController');


router.post(
    '/new', 
    [   // Middlewares
        check( "name" ).not().isEmpty(),
    ],
    crearUsuario );

router.post('/', loginUsuario );

router.get('/renew', revalidarToken );



module.exports = router;