const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateRegisterSchema = new Schema({
    id: String,
    startDate: Date,
    endDate: Date,
    startHour: String,
    endHour: String
});

module.exports = mongoose.model('register', DateRegisterSchema);
