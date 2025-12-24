const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    medicalHistory: {
        type: String,
        default: ''
    },
    allergies: {
        type: String,
        default: ''
    },
    bloodGroup: {
        type: String,
        required: [true, 'Please provide a blood group']
    }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
