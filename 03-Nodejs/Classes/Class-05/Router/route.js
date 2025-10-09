const express = require('express');
const { auth, signup, login, userDetails } = require('../Controller/userAuth')
// const { ageChecker } = require('../Middleware/ageChecker')

const router = express.Router()


router.get('/', auth);
router.post('/login', login);
router.post('/signup', signup);
router.get('/userDetails', userDetails);

module.exports = router