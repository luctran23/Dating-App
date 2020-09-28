const mongoose = require('mongoose');

const girlSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    hometown: String
});

const Girl = mongoose.model('Girl', girlSchema, 'girls');

module.exports = Girl;
