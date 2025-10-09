const express = require('express');
const router = require("./Router/route");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router)


app.listen(PORT, () => {

    console.log('server is connecting successfuly');

});
