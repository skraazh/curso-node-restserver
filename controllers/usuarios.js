const {response, request} = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');


const usuariosGet = async(req, res = response)=> {

    const {limite=5, desde=0} = req.query;
    const query = {estado: true};

    // Promesas que al usar al await sumaban tiempo de
    // espera, estas se resumieron en la const resp
    // para que ambas promesas respondieran de manera
    // simultanea, esta const fue desestructurada para
    // usar las variables por separado

    // const usuarios = await Usuario.find(query)
    //     .limit(Number(limite))
    //     .skip(Number(desde));
        
    // const total = await Usuario.countDocuments(query);

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .limit(Number(limite))
            .skip(Number(desde))
    ])

    res.json({
        total,
        usuarios
    })
};

const usuariosPost =async (req, res = response)=> {

    const {nombre, correo, password, rol} = req.body;
    const usuarios = new Usuario({nombre, correo, password, rol} );
    

    //Encriptar la contrasena
    const salt = bcryptjs.genSaltSync();
    usuarios.password = bcryptjs.hashSync(password, salt);

    //Guardar DB
    await usuarios.save();
    res.json({
        usuarios
    })
};

const usuariosPut = async(req, res = response)=> {

    const {id} = req.params;
    const { _id,password,google,correo, ...resto} = req.body;

    // Todo validar contra la base de datos
    if(password){
        //Encriptar la contrasena
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);

    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json(usuario);
};

const usuariosPatch =(req, res = response)=> {
    res.json({
        msg:'Patch API - controlador',
    })
};

const usuariosDelete = async(req, res = response)=> {
    
    const{id} = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id,{estado: false});

    res.json({
        usuario,
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}