const Reservation = require('../schemas/reservation');
const Doctor = require('../schemas/doctor');

async function createReservation(doctorId, date) {
  try {
    const respuestaGuardado = await Reservation.create({ doctorId, date });
    return respuestaGuardado;
  } catch (error) {
    throw new Error(`Error al crear la reserva: ${error.message}`);
  }
}

async function getReservationsWithDetails(userId) {
  try {
    const reservations = await Reservation.find({ userId })
      .populate({
        path: 'doctorId',
        select: 'nombres apellidos correo especialidad rut'
      })
      .populate({
        path: 'userId',
        select: 'nombres apellidos correo otrosCampos'
      })
      .populate({
        path: 'mascotaId', 
        select: 'nombre tipo' 
      });
    return reservations;
  } catch (error) {
    throw new Error(`Error al obtener las reservas: ${error.message}`);
  }
}

module.exports = { createReservation, getReservationsWithDetails };



