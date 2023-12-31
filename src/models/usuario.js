const Usuario = require('../schemas/usuario'); // Asegúrate de la ruta correcta

async function crearUsuario(datosUsuario) {
  const mascotasData = datosUsuario.mascotas;
  delete datosUsuario.mascotas;

  const usuario = new Usuario(datosUsuario);

  usuario.mascotas = mascotasData.map(mascotaData => ({
    nombreMascota: mascotaData.nombre,
    tipoAnimal: mascotaData.tipo,
  }));

  await usuario.save();

  return usuario;
}

async function obtenerUsuario(user, password) {
  try {
    const respuesta = await Usuario.findOne({ correo: user, contrasena: password }).populate('mascotas');
    return respuesta;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
}

module.exports = { crearUsuario, obtenerUsuario };

