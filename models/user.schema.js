const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

    username: String,
    password: String,
    number: Number,
    email: String,

})

let user = mongoose.model('user',userschema)
module.exports = user;

