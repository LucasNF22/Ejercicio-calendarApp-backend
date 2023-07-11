const express = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async( req, res = response ) => {

    const { name, email, password } = req.body;



    try {

        let usuario = await Usuario.findOne({ email });

        if( usuario ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El email ya está en uso.'
            })
        }
        
        usuario = new Usuario( req.body );
        // Generar JWT
        const token = await generarJWT( usuario._id, usuario.name );
        
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();

        usuario.password = bcrypt.hashSync( password, salt );
        
        await usuario.save();
        
        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
    
        });      

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con el administrador'
        });


    }
};

const loginUsuario = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });
        if( !usuario ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Credenciales inválidas.'
            })
        };

        // Comparar contraseñas.
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'contraseña inválida.'
            })
        };

        // Generar el Json Web Token
        const token = await generarJWT( usuario._id, usuario.name );

        res.json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con el administrador'
        });
    };
    

};

const revalidarToken = async( req, res = response ) => {

    const { uid, name } = req;

    // c  onst token = ???
    const token = await generarJWT( uid, name );
    
    res.json({
        ok: true,
        msg: 'renew',
        token
 
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken

}