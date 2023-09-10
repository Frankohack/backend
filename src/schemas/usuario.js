const mongoose = require('mongoose');

const usuario = new mongoose.Schema({
    rut: String,
    nombres: String,
    apellidos: String,
    correo: String,
    region: String,
    comuna: String,
    direccion: String,
    numero: Number,
    telefono: Number,
    contraseña: String
})

const Usuario = mongoose.model('usuario', usuario)

module.exports = Usuario