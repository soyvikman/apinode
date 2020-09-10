const mongoose = require('mongoose');

const playaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    aforo: {
        type: String,
        required: true
    },
    bioseguridad: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model("Playa", playaSchema);