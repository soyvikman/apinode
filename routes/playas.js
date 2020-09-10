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

router.post("/nueva", async (req, res) => {
    const { nombre, latitud, longitud, aforo, bioseguridad } = req.body;
    try {
        const nuevaPlaya = new Playa({
            nombre,
            latitud,
            longitud,
            aforo,
            bioseguridad
        });
        await nuevaPlaya.save();
        console.log(`Se agregó una nueva playa: ${nuevaPlaya}`);
        res.json(nuevaPlaya);
    } catch (error) {
        res.json(error);
    }
});

// Ver una playa
// Ruta GET /playas/:id
router.get("/:id", async (req, res)=>{
    try{
        const verPlaya = await Playa.findById(req.params.id);
        res.json(verPlaya)
    } catch (error){
        console.log(`Se presentó el siguiente error: ${error}`)
    }

})


module.exports = router;