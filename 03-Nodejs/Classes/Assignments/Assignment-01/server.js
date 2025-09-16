const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(('/'), (req, res, next) => {
    res.send(`I'm starting to create a login page on ${PORT}`)
});

const array = [

    {
        userName: 'Anus',
        email: 'Anus@gmail.com',
        password: 'Anus123',
    },

    {
        userName: 'Aslam',
        email: 'Aslam@gmail.com',
        password: 'Aslam123',
    },

    {
        userName: 'Hamza',
        email: 'Hamza@gmail.com',
        password: 'Hamza123',
    },

    {
        userName: 'Amjad',
        email: 'Amjad@gmail.com',
        password: 'Amjad123',
    },

    {
        userName: 'Kamran',
        email: 'Kamran@gmail.com',
        password: 'Kamran123',
    },

    {
        userName: 'Imran',
        email: 'Imran@gmail.com',
        password: 'Imran123',
    },

    {
        userName: 'Ali',
        email: 'Ali@gmail.com',
        password: 'Ali123',
    },

    {
        userName: 'kunain',
        email: 'kunains@gmail.com',
        password: 'kunain123',
    },

    {
        userName: 'Zain',
        email: 'Zain@gmail.com',
        password: 'Zain123',
    },

    {
        userName: 'Bilal',
        email: 'Bilal@gmail.com',
        password: 'Bilal123',
    },
]

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    let isfound = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i].email === email && array[i].password === password) {

            res.send(`Login successfuly! & Welcome ${array[i].userName}`)
            isfound = true;
            break;
        }
    }
    if (isfound === false) {

        res.send('Wrong Email or Password!')

    };

});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});








