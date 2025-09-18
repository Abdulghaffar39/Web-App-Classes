const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(('/home'), (req, res, next) => {
    res.send(`I'm starting to create a login page on ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});






