const Playa = require('./../models/Playa');

// Ver todas las playas
// Ruta GET /playas
exports.verPlayas = async (req,res,next) =>{
try{
    const playas = await Playa.find({});
    res.status(200).json(playas)
} catch (e){
    res.status(400).json({success:false, message:e.message.red})
}
}

// Ver una playa
// Ruta GET /playas/shortid
exports.verPlaya = async (req,res,next)=>{
    try{
        const verPlaya = await Playa.find({"shortid":req.params.shortid});
        res.status(200).json(verPlaya)
    } catch (error){
        res.status(200).json({success:false, error:`Se presentó el siguiente error: ${error}`})
    }
}

// Agregar nueva playa
// Ruta POST /playas/nueva
exports.crearPuntuacion = async(req,res,next)=>{
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
        res.status(201).json(nuevaPlaya);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// Editar información de una playa
// Ruta PUT /playas/:shortid
exports.editarPuntuacion = async (req,res,next)=>{
    try{
        const calificacionEditada = await Playa.findOneAndUpdate(req.params.shortid, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json(calificacionEditada)
    } catch (error){
        res.status(400).json(error.message)
    }
}

// Borrar comentario de una playa
// Ruta DELETE /playas/:shortid
exports.borrarPuntuacion = async(req,res,next)=>{
    try{
        const borrarComentario = await Playa.findOneAndDelete(req.params.id)
        res.status(200.).json({success:true, message: ~~`Se ha borrado el comentario correctamente`})
    } catch (error){
        res.status(400).json({success:false,error: `Se presentó el siguiente error al borrar: ${error.message}`})
    }
}