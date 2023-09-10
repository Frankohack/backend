const Usuario = require('../schemas/usuario')

async function crearUsuario(rut, nombres, apellidos, correo, region, comuna, direccion, Numero, telefono, contraseña) {
    const respuestaGuardado = await Usuario.create({rut, nombres, apellidos, correo, region, comuna, direccion, Numero, telefono, contraseña})
    return respuestaGuardado
};


async function obtenerUsuario(user, password) {
    const respuesta = await Usuario.findOne({correo: user, contraseña: password})
    return respuesta
}

module.exports = {crearUsuario, obtenerUsuario}