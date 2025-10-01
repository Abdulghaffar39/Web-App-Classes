const express = require('express');
const { auth, login, signup } = require('../Controller/UserAuth')
const { ageChecker } = require('../Middleware/ageCheck')

const router = express.Router();


router.get('/', auth);
router.post('/login', ageChecker, login);
router.post('/signup', signup);


module.exports = router;
