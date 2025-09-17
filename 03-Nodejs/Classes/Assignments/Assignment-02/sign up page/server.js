const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(('/'), (req, res, next) => {

    res.send('Starting sign up page');
});

const array = [

    {
        Name: "Abdul Ghaffar",
        Age: "23",
        Email: "abdulghaffar@gmail.com",
        Password: "123456"
    },

    {
        name: "Anus",
        age: "27",
        email: "Anus@gmail.com",
        password: "123566"
    }
]


app.post('/login', (req, res, next) => {

    const { userName, userAge, userEmail, userPassword } = req.body;

    let isfound = false;

    if (userName === '' || userAge === '' || userEmail === '' || userPassword === '') {

        return res.send('Please fill the sign up page');

    }

    if (userEmail.indexOf('@gmail.com') === -1) {

        return res.send('Please create correct email!');

    }

    if (userPassword.length <= 5) {

        return res.send('Put at least 6 digits in Password');

    }
    
    for (let i = 0; i < array.length; i++) {


        if (userEmail === array[i].email && userPassword === array[i].password) {

            isfound = true;

            return res.send({
                status: 200,
                message: (`Sign Up successfuly! and Welcon ${array[i].name}`),
            });
        }
    }

    if (isfound === false) {

        res.send({
            status: 404,
            message: (`User Not Found`),
        })
    }

});

app.listen(PORT, () => {

    console.log(`Server is running on ${PORT}`);
});


