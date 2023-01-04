const { Schema, model }= require('mongoose');

const UsuarioSchme = Schema({
    // _id:{
    //     type: Object,
    // },
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
        emun: ['ADMIN_ROL','USER_ROL']
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

// Se modifica el metodo toJSON para que envie toda
// la informacion del usuario menos la version y 
// el password
UsuarioSchme.methods.toJSON = function(){
    const { __v, password, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuario',UsuarioSchme);