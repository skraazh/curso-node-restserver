const { Schema, model }= require('mongoose');

const UsuarioSchme = Schema({
    nombre:{
        type: String,
        required: [true,'nombre es requerido']
    },
    correo:{
        type: String,
        required: [true,'correo es requerido']
    },
    password:{
        type: String,
        required: [true,'password es requerido']
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
        enum: ['ADMIN_ROL','USER_ROL']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

module.exports = model('Usuario',UsuarioSchme);