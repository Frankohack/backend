const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    mascotaId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota'
    },
    
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;

