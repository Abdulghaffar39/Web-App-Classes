const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://Abdulghaffar:Abdulghaffar@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')



.then(() => {

    console.log("Connect to MongoDB");
})
.catch((err) => {

    console.error("Error connecting to MongoDB:" , err);
    
})

app.get(('/home'), (req, res, next) => {
    res.send(`I'm starting to create a login page on ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
