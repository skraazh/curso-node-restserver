const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '')=>{

    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no existe en la BD`);
    }
}

const emailExiste = async(correo = '')=>{

    const existEmail = await Usuario.findOne({correo});
    if(existEmail){
        throw new Error(`El ${correo} ya existe en la BD`);
    }
}

const existeUsuarioPorId = async(id = '')=>{
    const existUsuario = await Usuario.findById(id);
    if(!existUsuario){
        throw new Error(`El id ${id}`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
}