/*
    Rutas de usuario  / auth
    host + /api/auth

*/


const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController');


router.post('/new', crearUsuario );
router.post('/', login );
router.get('/renew', renovarToken );



module.exports = router;