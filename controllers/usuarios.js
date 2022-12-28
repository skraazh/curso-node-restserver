const {response, request} = require('express');

const Usuario = require('../models/usuarios');


const usuariosGet =(req, res = response)=> {

    const query = req.query;
    res.json({
        msg:'Get API - controlador',
        query,
        
    })
};

const usuariosPost =async (req, res = response)=> {

    const body = req.body;
    const usuarios = new Usuario(body);
    await usuarios.save();
    res.json({
        msg:'Post API - controlador',
        usuarios
    })
};

const usuariosPut =(req, res = response)=> {

    const {id} = req.params;
    res.json({
        msg:'Put API - controlador',
        id,
    })
};

const usuariosPatch =(req, res = response)=> {
    res.json({
        msg:'Patch API - controlador',
    })
};

const usuariosDelete =(req, res = response)=> {
    const{id} = req.params;
    res.json({
        msg:'Delete API - controlador',
        id,
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}