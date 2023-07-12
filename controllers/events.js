const { response } = require('express')

const getEventos = ( req, res = response ) => {
    res.json(
        {
            ok: true,
            msg: 'getEventos'
        })
};

const createEvento = ( req, res = response ) => {
    res.json(
        {
            ok: true,
            msg: 'createEvento'
        })
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