const mongoose = require('mongoose');
const shortid = require('shortid');

const playaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
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
    },
    calificaciones: {
        type: Array,
        default: []
    },
    comentarios: {
        type: Array,
        default: [{idUsuario:1, comentario: "Esta playa aún no ha recibido comentarios"}]
    }
})

module.exports = mongoose.model("Playa", playaSchema);