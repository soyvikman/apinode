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
    temperatura: {
        type: Number,
        required: true
    },
    nubosidad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Playa", playaSchema);