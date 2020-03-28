var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [6, "Ingrese un número de usuario de minimo 6 caracteres"],
        maxlength: [14, "Núm de caracteres max: 14"]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "El correo electronico es un campo obligatorio c:"]
    }
})

var Usuario = mongoose.model("Usuarios", modelSchema)
module.exports = Usuario;