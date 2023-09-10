// reservaRoutes.js

const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Rutas relacionadas con reservas
router.post('/reservas', reservaController.crearReserva);
router.get('/reservas', reservaController.obtenerTodasLasReservas);
// Otros endpoints de reservas

module.exports = router;
