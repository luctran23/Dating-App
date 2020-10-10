const mongoose = require('mongoose');

const girlSchema =  new mongoose.Schema({
    name: String,
    imgUrl: String,
    age: Number,
    hometown: String,
    hobbies: String
});

const Girl = mongoose.model('Girl', girlSchema, 'girls');

module.exports = Girl;
