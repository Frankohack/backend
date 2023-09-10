const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  especialidad: String,
  region: String,
  comuna: String,
  hospital: String,
  valoracion: Number
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
