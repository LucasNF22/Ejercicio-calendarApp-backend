
////////////    EVENTS ROUTES
////////////   /api/events

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, createEvento, UpdateEvento, deleteEvento } = require('../controllers/eventsController');

const router = Router();


router.use( validarJWT ); // se usa el middleware en todas las rutas que estan debajo.

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo eveno
router.post(
    '/', 
    [
        check('title', 'titulo obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion obligatoria').custom( isDate ),
        validarCampos,
    ],
    createEvento);

// Actualizar evento
router.put('/:id', UpdateEvento);

// Borrar evento
router.delete('/:id', deleteEvento);

module.exports = router;


