const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        require: true
    },
    noes: {
        type: String,
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

});

module.exports = model( 'Evento', EventoSchema );