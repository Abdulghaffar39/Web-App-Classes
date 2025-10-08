const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





mongoose.connect('mongodb+srv://Abdulghaffar:fAvHoNs28azHE7iC@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {

        console.log('Connect with mongooDB');

    }).catch((err) => {

        console.log('Error connect', err);

    })

const user = [

    {
        name: "Abdul Ghaffar",
        age: "50",
        email: "abdulghaffar@gmail.com",
        pass: "12345"
    },

    {
        name: "Abdul Ghaffar",
        age: "13",
        email: "abdulghaffar@gmail.com",
        pass: "12345"
    },

    {
        name: "Anus",
        age: "23",
        email: "Anus@gmail.com",
        pass: "12345677"
    },

    {
        name: "Talha",
        age: "33",
        email: "Talha@gmail.com",
        pass: "12345887"
    },

    {
        name: "Moin",
        age: "46",
        email: "Moin@gmail.com",
        pass: "12345233"
    },
]


app.get(('/'), (req, res, next) => {

    res.send({

        status: 200,
        message: 'Working successfuly',

    })

})

app.post('/signup', (req, res, next) => {

    const { userName, userAge, userEmail, userPass } = req.body;

    
})


app.post(('/login'), (req, res, next) => {


    const {useremail, userpass } = req.body

    let isfound = false;

    for (let i = 0; i < user.length; i++) {

        if (useremail === user[i].email && userpass === user[i].pass) {

            isfound = true;
            
            return res.send({
                status: 201,
                message: `login successfully`,
            })

        }

        // console.log(user);
    }

    if (isfound === false) {

        res.send({
            status: 404,
            message: 'email or password is invalid'
        })
    }


})



app.listen(PORT, () => {

    console.log('server is connecting successfuly');

});
