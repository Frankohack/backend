const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Esto se relaciona con el modelo de Usuario, ajusta el nombre si es diferente
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Esto se relaciona con el modelo de Doctor, ajusta el nombre si es diferente
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  // Otros campos relacionados con la reserva
});

module.exports = mongoose.model('Reserva', reservaSchema);
