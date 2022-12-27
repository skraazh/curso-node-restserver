const {Router} = require('express');

const router = Router();

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete} = require('../controllers/usuarios');



router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;