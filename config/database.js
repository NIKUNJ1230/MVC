const mongoose = require('mongoose');
require("dotenv").config

let url = process.env.db_url

console.log(url)

const connection=async()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017")
   console.log("Connected to MongoDB");
    
}


module.exports = connection;