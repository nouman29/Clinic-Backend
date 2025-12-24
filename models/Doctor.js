const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialization: {
        type: String,
        required: [true, 'Please provide a specialization']
    },
    experience: {
        type: Number,
        required: [true, 'Please provide years of experience']
    },
    availability: {
        days: {
            type: [String],
            required: [true, 'Please provide at least one available day']
        },
        workingHours: {
            start: { type: String, required: [true, 'Please provide start time'] },
            end: { type: String, required: [true, 'Please provide end time'] }
        }
    },
    consultationFee: {
        type: Number,
        required: [true, 'Please provide consultation fee']
    }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
