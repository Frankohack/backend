const Doctor = require('../schemas/doctor')


async function crearDoctor(nombres, apellidos, especialidad, region, comuna, hospital, valoracion) {
    const respuestaGuardadoDoc = await Doctor.create({nombres, apellidos, especialidad, region, comuna, hospital, valoracion})
    return respuestaGuardadoDoc
};

async function obtenerDoctor() {
    const respuestaDoc = await Doctor.find()
    return respuestaDoc
}

module.exports = {crearDoctor, obtenerDoctor}