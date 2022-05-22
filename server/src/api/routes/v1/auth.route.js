const express = require("express");
const { register, login, forgotPassword, resetPassword, verifyEmail, emailConfirmation } = require('../../controllers/auth.controller')

const router = express.Router();

router.post('/login', login);                 

router.post('/register', register);                

router.post('/forgotPassword', forgotPassword);

router.put('/resetPassword/:resetToken', resetPassword);

router.put('/sendLink', emailConfirmation);

module.exports = router;