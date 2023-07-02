// connecting to database
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/medantrik";
mongoose.set('strictQuery', true);// To remove deprecation warning

const connectToMongo = ()=>{//arrow function
    mongoose.connect(mongoURI, ()=>{// call back function
       console.log("Connected Mongo and COMPILED Successfully");
       console.log("");
    })
}

module.exports = connectToMongo;