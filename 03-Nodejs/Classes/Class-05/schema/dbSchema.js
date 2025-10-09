const mongoose = require('mongoose');

let schemaClass = new mongoose.Schema({

    userName: {

        type: String,
        required: true,
    },

    userAge: {

        type: String,
        required: true,
    },

    userEmail: {

        type: String,
        required: true,
    },

    userPass: {

        type: String,
        required: true,
    }

})


let Schema = mongoose.model('user', schemaClass);


module.exports = {
    Schema
}

