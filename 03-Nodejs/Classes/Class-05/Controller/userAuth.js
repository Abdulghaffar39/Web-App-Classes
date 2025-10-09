const mongoose = require('mongoose');
const { Schema } = require('./../schema/dbSchema');



mongoose.connect('mongodb+srv://Abdulghaffar:yIeCsohSQl5z6NOF@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log('Connect with mongooDB');

}).catch((err) => {

    console.log('Error connect', err);

})



const userdummy = [

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

    res.send('Hello World!!!')
}




async function signup(req, res, next) {

    try {

        const { userName, userAge, userEmail, userPass } = req.body;

        const user = await Schema.findOne({ userEmail: userEmail })
        console.log(user, 'line number 41');

        if (user) {

            return res.send({
                status: 505,
                message: "user already exists",
            })
        }


        const newUser = new Schema({ userName, userAge, userEmail, userPass });
        await newUser.save();


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

}


async function userDetails(req, res, next) {
    try {
        // const someOtherPlaintextPassword = 'not_bacon';
        // use for get API to get all user data
        const data = await Schema.find({})
        console.log(data);
        // use for spacific user finding
        // const users = await Schema.find()
        // console.log(users, 'line number 41');
        res.send({
            message: "users recieved",
            data
        })


    } catch (err) {
        console.log(err);
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}


async function login(req, res) {
    try {

        const { loginEmail, loginPass } = req.body;

        const user = await Schema.findOne({ userEmail: loginEmail });

        if (!user) {

            return res.send({

                status: 404,
                message: 'Email is not exists',
            });
        }

        if (user.userPass !== loginPass) {

            return res.send({

                status: 401,
                message: 'Password wrong'
            });
        }

        res.send({

            status: 200,
            message: 'Login successful',
            data: user,
        });

    }
    catch (err) {

        console.log(err);

        res.send({
            status: 500,
            message: 'Server error',
            err
        });

    }
}

module.exports = { auth, signup, login, userDetails }