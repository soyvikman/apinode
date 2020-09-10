const express = require('express');
const router = express.Router();
const Playa = require('./../models/Playa');

// Ver todas las playas
// Ruta GET /playas
router.get("/", async(req,res)=>{
    const playas = await Playa.find({});
    res.json(playas)

})

// Agregar nueva playa
// Ruta POST /playas/nueva
/*
router.post("/", async (req, res) => {
    const { nombre, ruc, telefono, encargado, email } = req.body;
    try {
        const nuevaEmpresa = new Empresa({
            nombre,
            ruc,
            telefono,
            encargado,
            email
        });
        await nuevaEmpresa.save();
        console.log(`Se agregó una nueva empresa: ${nuevaEmpresa}`);
        res.json(nuevaEmpresa);
    } catch (error) {
        res.json(error);
    }
});
*/



module.exports = router;