const mongoose = require("mongoose");

let schemaClass = new mongoose.Schema({

    userName: {

        type: String,
        require: true,
    },

    userAge: {

        type: String,
        require: true,
    },

    userEmail: {

        type: String,
        require: true,
    },

    userPass: {

        type: String,
        require: true,
    }

})


let Schema = mongoose.model('user', schemaClass);


module.exports = {
    Schema
}

