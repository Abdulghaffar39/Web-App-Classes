const express = require("express")
const { signUp, login, home, SendMail } = require("../Controller/auth");
const authrization = require("../Middleware/authentication");


const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/home", authrization, home);
router.post("/SendMail", SendMail);


module.exports = router
