const {Schema, model} = require('mongoose');

const tragoSchema = new Schema({

    reto: { type: String },

})

module.exports = model('Reto', tragoSchema);