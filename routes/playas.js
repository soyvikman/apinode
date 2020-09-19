const express = require('express');
const router = express.Router();
const {verPlayas,verPlaya,editarPuntuacion,crearPuntuacion,borrarPuntuacion} = require('./../controllers/playas')

router.route('/').get(verPlayas).post(crearPuntuacion)
router.route('/:shortid').get(verPlaya).put(editarPuntuacion).delete(borrarPuntuacion)


module.exports = router;