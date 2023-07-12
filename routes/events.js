
////////////    EVENTS ROUTES
////////////   /api/events

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, createEvento, UpdateEvento, deleteEvento } = require('../controllers/events');

const router = Router();


router.use( validarJWT ); // se usa el middleware en todas las rutas que estan debajo.

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo eveno
router.post('/', createEvento);

// Actualizar evento
router.put('/:id', UpdateEvento);

// Borrar evento
router.delete('/:id', deleteEvento);

module.exports = router;


