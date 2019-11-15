const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeRegistry = new Schema({
    userId: String,
    startDate: String,
    endDate: String,
    entryTime: String,
    exitTime: String
});

module.exports = mongoose.model('registry', TimeRegistry);
