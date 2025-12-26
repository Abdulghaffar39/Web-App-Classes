const mongoose = require("mongoose")

const { Schema } = mongoose

const user = new Schema({

    fname:{

        type: String,
        required: true
    }, 
    lname:{
        
        type: String,
        required: true
    }, 
    email:{
        
        type: String,
        required: true
    }, 
    password:{
        
        type: String,
        required: true
    },

});


const userValue = mongoose.model("userValue", user);
module.exports = userValue;
