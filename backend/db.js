// connecting to database
require('dotenv').config({path: __dirname + '/.env'})
const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE;
mongoose.set('strictQuery', true);// To remove deprecation warning

const connectToMongo = ()=>{//arrow function
    mongoose.connect(mongoURI, ()=>{// call back function
       console.log("Connected Mongo and COMPILED Successfully");
       console.log("");
    })
}

module.exports = connectToMongo;