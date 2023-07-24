const { response } = require('express');
const Evento = require('../models/evento');
const { body } = require('express-validator');


const getEventos = async( req, res = response ) => {

    const eventos = await Evento.find()
                                .populate('user', 'name')



    res.json(
        {
            ok: true,
            eventos,
        });
};

const createEvento = async( req, res = response ) => {

    const evento = new Evento( req.body );

    try {
        
        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador.'
        });
    }
};

const UpdateEvento = ( req, res = response ) => {
    res.json(
        {
            ok: true,
            msg: 'UpdateEvento'
        })
};

const deleteEvento = ( req, res = response ) => {
    res.json(
        {
            ok: true,
            msg: 'deleteEvento'
        })
};


module.exports ={
    getEventos,
    createEvento,
    UpdateEvento,
    deleteEvento,
}