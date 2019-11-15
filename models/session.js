const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session = new Schema(
    {
        userId: String
    }
);

module.exports = mongoose.model('session', Session);
