const express = require('express');

const router = express.Router()

const {loginUser, signupUser} = require('../controllers/userController');

//Login routes
router.post('/login', loginUser)
//Signup routes
router.post('/signup', signupUser)

module.exports = router