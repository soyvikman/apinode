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
    const { nombre, condiciones, transporte, aforo, bioseguridad } = req.body;
    try {
        const nuevaPlaya = new Playa({
            nombre,
            condiciones,
            transporte,
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
// Ruta GET /playas/shortid
router.get("/:shortid", async (req, res)=>{
    try{
        const verPlaya = await Playa.find({"shortid":req.params.shortid});
        res.json(verPlaya)
    } catch (error){
        console.log(`Se presentó el siguiente error: ${error}`)
    }

})

// Editar información de una playa
// Ruta PUT /playas/:shortid
router.put("/:shortid", async (req, res)=>{
    try{
        const shortid = req.params.shortid;
        const { nombre, condiciones, transporte, aforo, bioseguridad } = req.body;
        const opinionPlaya = {
            nombre,
            condiciones,
            transporte,
            aforo,
            bioseguridad
        }
        await Playa.findOneAndUpdate({"shortid":shortid},opinionPlaya)
        res.json(`Se editó la opinión de la playa correctamente`)
    } catch (error){
        console.log(`Se presentó el siguiente error al editar: ${error}`)
    }

})

// Borrar comentario de una playa
// Ruta DELETE /playas/:shortid
router.put("/:shortid", async (req, res)=>{
    try{
        const shortid = req.params.shortid;
        await Playa.findOneAndRemove({"shortid":shortid})
        res.json(`Se borró el comentario correctamente.`)
    } catch (error){
        console.log(`Se presentó el siguiente error al borrar: ${error}`)
    }

})

module.exports = router;