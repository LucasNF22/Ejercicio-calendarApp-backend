const { response } = require('express');
const Evento = require('../models/evento');
const { body } = require('express-validator');
const Usuario = require('../models/Usuario');
const mongoose = require('mongoose');


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

const UpdateEvento = async( req, res = response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById( eventoId );

        if( !evento ){
            return res.status(500).json({
                ok: false,
                msg: "No existe evento con ese ID"
            })
        };
        
        // console.log( uid );
        // console.log( vento.user.toString() );

        if( evento.user.toString() !== uid ){
            return res.status(401).json({
                user: evento.user.toString(),
                ok: false,
                msg: "no tiene privilegios para modificar este evento"
            })
        };

       
        const nuevoEvento = {
            ...req.body,
            user: uid,
        };

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        res.json({
            ok: true, 
            evento: eventoActualizado,
        })



    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador."
        })
    };

   
};

const deleteEvento = async( req, res = response ) => {
    
    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById( eventoId );

        if( !evento ){
            return res.status(500).json({
                ok: false,
                msg: "No existe evento con ese ID"
            })
        };
        
        // console.log( uid );
        // console.log( vento.user.toString() );

        if( evento.user.toString() !== uid ){
            return res.status(401).json({
                user: evento.user.toString(),
                ok: false,
                msg: "no tiene privilegios para Eliminar este evento"
            })
        };

    
        await Evento.findByIdAndRemove( eventoId );

        res.json({
            ok: true, 
            evento: "Evento Eliminado",
        })



    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador."
        })
    };

};


module.exports ={
    getEventos,
    createEvento,
    UpdateEvento,
    deleteEvento,
}