var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [4,"su username debe tener al menos 4 caracteres"],
        maxlength:[18,"Máximo de caracteres: 18"],
        required: [true,"Ingrese un username por favor uwu"],
        unique: [true, "Este nombre de usuario ya ha sido registrado, pruebe otro"]
    },
    name: {
        type:String,
        minlength: [4,"El nombre es muy corto"],
        maxlength: [32,"Recuerda que el máximo de caracteres del nombre es 32"]
    },
    email: {
        type: String,
        minlength: [10,"el email requiere al menos 10 caracteres"],
        maxlength: [40,"su email es damasido largo"],
        required: [true, "El email es obligatorio, por favor ingrese uno"],
        unique: [true, "Este email ya ha sido registrado antes"]
    },
    password: {
        type:String,
        required: [true,"Olvido poner su contraseña c:"]
    }
});

var usuarios = mongoose.model("usuarios",modelSchema);
module.exports = usuarios;