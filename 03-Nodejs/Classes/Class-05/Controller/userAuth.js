const mongoose = require("mongoose");
const { Schema } = require('./../schema/dbSchema');



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


function auth(req, res, next) {

    res.send('Hello World')
}




async function singup(req, res, next) {

    try {

        const { userName, userAge, userEmail, userPass } = req.body;

        const data = await Schema.find({})
        console.log(data);


        return res.send({
            status: 200,
            message: 'accound created successfuly',
        })
    }
    catch (err) {

        console.log(err);

        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })

    }



    if (userAge < 18) {

        return res.send('Invalid age');

    }

}


async function login (req, res, next) {


    const { useremail, userpass } = req.body

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


}


module.exports = { auth, singup, login}