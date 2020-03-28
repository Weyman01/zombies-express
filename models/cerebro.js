var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        minlength: [5, "El sabor es debe tener al menos 5 caracteres"],
        maxlength: [22, "El sabor que ingreso es demasiado largo"]
    },
    description: {
        type: String,
        minlength: [8, "Descripcion minima requerida: 8 caracteres"],
        maxlength: [42, "Su descripción sobrepaso el limite de 42 caracteres"]
    },
    iq: {
        type: Number,
        required: true,
        min: [1, 'El iq no puede ser 0'],
        max: [301, 'El IQ no puede ser mayor a 300']
    },
    picture: {
        type: String,
        required: true
    }
})

var Cerebro = mongoose.model("Cerebro", modelSchema)
module.exports = Cerebro;