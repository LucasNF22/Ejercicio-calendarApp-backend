const express = require('express');


const crearUsuario = ( req, res = response ) => {

    const { name, email, password } = req.body;

    if( name.length < 3 ){
        res.status(400).json({
            ok: false,
            msg: 'El nombre debe tener al menos 3 letras.',
        })
    }
    
    res.json({
        ok: true,
        msg: 'registro',
        name, 
        email,
        password
    });
};

const loginUsuario = ( req, res = response ) => {

    const { email, password } = req.body;
    
    res.json({
        ok: true,
        msg: 'login',
        email, 
        password
    });
};

const revalidarToken = ( req, res = response ) => {
    
    res.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    crearUsuario,
    login,
    renovarToken

}