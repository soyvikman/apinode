const mongoose = require('mongoose');
const shortid = require('shortid');

const playaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    condiciones: {
        type: String,
        required: true
    },
    transporte: {
        type: Boolean,
        required: true,
        default: false
    },
    aforo: {
        type: String,
        required: true
    },
    bioseguridad: {
        type: Boolean,
        required: true,
        default: true
    },
    shortid: {
        type: String,
        default: shortid.generate
    }
})

module.exports = mongoose.model("Playa", playaSchema);