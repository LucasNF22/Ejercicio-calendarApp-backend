/*
    Rutas de usuario  / auth
    host + /api/auth

*/


const { Router } = require('express');
const { check, body } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new', 
    [   // Middlewares
        check( 'name', 'el nombre es obligatorio' ).notEmpty(),
        check( 'email', 'el mail es obligatorio' ).isEmail(),
        check( 'password', 'el password debe tener al menos 6 caracteres' ).notEmpty().isLength({min: 6}),
        validarCampos
    ],
    crearUsuario );

router.post(
    '/', 
    [
        check( 'email', 'el mail es obligatorio' ).isEmail(),
        check( 'password', 'el password debe tener al menos 6 caracteres' ).notEmpty().isLength({min: 6}),
        validarCampos
    ],
    loginUsuario );

router.get('/renew', validarJWT ,revalidarToken );



module.exports = router;