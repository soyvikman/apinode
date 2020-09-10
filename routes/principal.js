const express = require('express');
const router = express.Router();
const Playa = require('./../models/Playa');


router.get("/", async(req,res)=>{
    res.json({"Estado":"API Funcionando Correctamente"})
})

module.exports = router;