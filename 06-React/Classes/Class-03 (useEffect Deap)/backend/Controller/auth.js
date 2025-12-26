const userValue = require("../db/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function signUp(req, res) {
    try {
        // destructure
        const { fname, lname, email, password, role } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {

            bcrypt.hash(password, salt, function (err, hash) {

                const user = { fname, lname, email, password, role };

                const result = new userValue(user).save();
                return res.send({
                    message: "signup successfully",
                    result,
                    status: 200,
                });
            });
        });
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding",
        });
    }
}

async function login(req, res) {
    // destructure
    try {
        const { email, password } = req.body;

        const dbUser = await userValue.findOne({ email });
        console.log(dbUser, "here is a user");

        // Load hash from your password DB.
        bcrypt.compare(password, dbUser.password, function (err, result) {
            // result == true

            if (result) {

                res.send({
                    status: 200,
                    message: "user login successfully",
                });
            }
        });
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding",
        });
    }
}

module.exports = { signUp, login};