const express = require('express');
const router = express.Router();
const Playa = require('./../models/Playa');


router.get("/", async(req,res)=>{
    const playas = await Playa.find({});
    res.json(playas)

})

module.exports = router;