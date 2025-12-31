const express = require("express")
const { signUp, login } = require("../Controller/auth");
const authrization = require("../Middleware/authentication");


const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", authrization, login);


module.exports = router
