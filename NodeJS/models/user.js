const mongoose = require('mongoose');

var user = mongoose.model('user', {
    name: { type: String },
    mail: { type: String },
    password: { type: String },
    balance: { type: Number }
});

module.exports = { user };