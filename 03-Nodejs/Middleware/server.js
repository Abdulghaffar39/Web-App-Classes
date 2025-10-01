const express = require("express");

const app = express();
const router = require('./Router/route');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router);


app.listen(PORT, () => {

    console.log(`Server is running on ${PORT}`);
    
})

