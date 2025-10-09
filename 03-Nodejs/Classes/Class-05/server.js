const express = require('express');
const mongoose = require("mongoose");
const { Schema } = require("./schema/dbSchema")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {

    console.log('server is connecting successfuly');

});
