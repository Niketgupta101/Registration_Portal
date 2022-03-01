const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: Number, minlength: 10 , required: true },
    message: { type: String, required: true },
    progress: { type: String, enum: [ 'Pending', 'Resolved' ], default: 'Pending' }, 
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Contact', contactSchema);