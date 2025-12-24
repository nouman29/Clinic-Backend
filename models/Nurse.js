const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    department: {
        type: String,
        required: [true, 'Please provide a department']
    },
    shift: {
        type: String,
        required: [true, 'Please provide a shift']
    }
}, { timestamps: true });

module.exports = mongoose.model('Nurse', nurseSchema);
