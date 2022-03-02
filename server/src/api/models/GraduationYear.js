const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const graduationYearSchema = new Schema({
    graduationYear: {
        type: Number,
        default: 2022
    }
});

module.exports = mongoose.model('GraduaationYear', graduationYearSchema);