const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const userSchema = require('../db/userSchema');
const nodemailer = require("nodemailer");

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
                const result = await new userSchema(user).save();

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

async function login(req, res) {

    try {

        const { email, password } = req.body;

        const user = await userSchema.findOne({ email })

        if (!user) {

            return res.send({
                status: 404,
                message: "User not found! Please try again anothor email"
            })
        }

        bcrypt.compare(password, user.password, function (err, result) {

            if (err) {

                console.log(err);
            }

            if (result) {

                let token = jwt.sign(

                    {
                        "fname": user.fname,
                        "lname": user.lname,
                        email: user.email,
                        password: user.password
                    },
                    process.env.JWTSECRETKEY,
                    { expiresIn: "1d" }

                );

                res.cookie("jwtToken", token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000, // 1 day
                    sameSite: "Lax"
                });

                console.log(token);

                return res.send({

                    user,
                    token,
                    status: 200,
                    message: `🎉 Thank you! Your details have been verify successfully.`,
                });

            }
            else {

                console.log("Your password invalid! Please try anothor password");

                return res.send({

                    status: 401,
                    message: "Your password invalid! Please try anothor password"
                })
            }

        });


    } catch (err) {

        console.log("SIGNUP ERROR:", err);

        return res.send({

            status: 500,
            message: "Sorry! Server is not responding"
        })
    }
}


async function home(req, res) {

    const { user } = req;
    // console.log(user, "this is line 139");

    try {

        return res.send({

            status: 200,
            message: `Welcome`,
        })

    }
    catch (err) {

        console.log("SIGNUP ERROR:", err);

        return res.send({

            status: 500,
            message: "Sorry! Server is not responding"
        })
    }
}

async function SendMail(req, res) {
    
    try {
        // Create a reusable transporter object using SMTP transport.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // use false for STARTTLS; true for SSL on port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        
        const { name, subject, email, message } = req.body; // Destructure and retrieve data from request body.
        
        // Validate required fields.
        if (!name || !subject || !email || !message) {
            return res
            .status(400)
            .json({ status: "error", message: "Missing required fields" });
        }
        // Prepare the email message options.
        const mailOptions = {
            from: process.env.SENDER_EMAIL, // Sender address from environment variables.
            to: `${name} <${email}>`, // Recipient's name and email address.
            replyTo: process.env.REPLY_TO, // Sets the email address for recipient responses.
            subject: subject, // Subject line.
            text: message, // Plaintext body.
        };
        
        // Send email and log the response.
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ status: "success", message: "Email sent successfully" });
    } catch (err) {
        res.send({
            status: 500,
            message: "user not authorized",
            err,
        });
    }
}

module.exports = { signUp, login, home, SendMail }
