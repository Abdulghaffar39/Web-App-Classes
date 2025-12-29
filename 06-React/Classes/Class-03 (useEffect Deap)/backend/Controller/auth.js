const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = require('../db/userSchema');

async function signUp(req, res) {

    try {

        const { fname, lname, email, password } = req.body;
        const findEmail = await userSchema.findOne({ email })

        if (findEmail) {

            return res.send({
                status: 505,
                message: "User already exist! Please try another email account"
            })
        }

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {

                const user = { fname, lname, email, password: hash };

                // const users = new await userSchema(req.body).save();
                const result = await new userSchema(req.body).save();

                return res.send({

                    result,
                    status: 200,
                    message: `🎉 Thank you! Your details have been submitted successfully.`,
                });

            });
        });


    }
    catch (err) {

        console.log("SIGNUP ERROR:", err);

        return res.send({

            status: 500,
            message: "Sorry! Server is not responding"
        })
    }
}

// async function login(req, res) {

//     try {

//         const { email, password } = req.body;

//         const user = await userValue.findOne({ email })

//         if (!user) {

//             return res.send({
//                 status: 404,
//                 message: "User not found! Please try again anothor email"
//             })
//         }

//         bcrypt.compare(password, user.password, function (err, result) {

//             if (err) {

//                 console.log(err);

//             }

//             if (result) {

//                 return res.send({

//                     token,
//                     result,
//                     status: 200,
//                     message: `🎉 Thank you, ${user.fullName}! Your details have been verify successfully.`,
//                 });

//             }
//             else {

//                 console.log("Your password invalid! Please try anothor password");

//                 return res.send({

//                     status: 401,
//                     message: "Your password invalid! Please try anothor password"
//                 })
//             }

//         });


//     }
//     catch (err) {

//         console.log("SIGNUP ERROR:", err);

//         return res.send({

//             status: 500,
//             message: "Sorry! Server is not responding"
//         })
//     }
// }


module.exports = { signUp }
