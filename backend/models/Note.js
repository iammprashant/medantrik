const mongoose = require('mongoose');
const { Schema } = mongoose; 
 
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // use as foreign key
        ref: 'user' 
    },
    
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('notes', NotesSchema);//notes here used is a collection name in database medantrik