const {Schema, model} = require('mongoose');

const tragoSchema = new Schema({
    nombre: { type: String },
    ingredientes: { type: String },
    preparacion: { type: String },
    graduacion: { type: String },
    filename: { type: String },
    path: { type: String }
})

module.exports = model('Trago', tragoSchema);