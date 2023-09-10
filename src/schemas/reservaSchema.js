const Joi = require('joi');

// Define un esquema de validación utilizando Joi (puedes ajustarlo según tus necesidades)
const reservaSchema = Joi.object({
  paciente: Joi.string().required(),
  doctor: Joi.string().required(),
  fecha: Joi.date().required(),
  hora: Joi.string().required(),
  // Otros campos y validaciones según tus requisitos
});

module.exports = reservaSchema;
