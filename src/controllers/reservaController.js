// reservaController.js

const Reserva = require('../models/reservaModel');

// Controlador para crear una reserva
exports.crearReserva = async (req, res) => {
  try {
    const { paciente, doctor, fecha, hora } = req.body;
    const nuevaReserva = new Reserva({ paciente, doctor, fecha, hora });
    await nuevaReserva.save();
    res.status(201).json(nuevaReserva);
  } catch (error) {
    console.error('Error al crear reserva:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

// Otros controladores para actualizar, eliminar y obtener reservas
// ...

// Controlador para obtener todas las reservas
exports.obtenerTodasLasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
