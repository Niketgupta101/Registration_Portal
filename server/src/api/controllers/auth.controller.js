const ErrorResponse = require('../utils/errorResponse');
const { registerUser, loginUser, forgotPassword, resetPassword, sendEmailConfirmation } = require('../services/authProvider');
const emailValidator = require('email-validator');

exports.register = async (req, res, next) => {
    const  user = req.body;

    if(!emailValidator.validate(user.email))
    return next(new ErrorResponse("Invalid Email-Id", 401));

    if(user.password !== user.confirmPassword)
    return next(new ErrorResponse("Passwords doesn't match", 402));

    if (user.email.matches("^\\S+@gmail\\.com$")) {
    return next(new ErrorResponse("Invalid Email-Id", 401));
    }

    let userDetails = {
        Name: `${user.firstName} ${user.lastName}`,
        emailId: user.email,
        ...user
    }

    try {
        const { newUser, token } = await registerUser(userDetails, next);

        res.status(201).json({ success: true, newUser, token});
    } catch (error) {
        return next(error);
    }
}

exports.login = async (req, res, next) => {
    const { emailIdOrUsername, password } = req.body;

    if(!emailIdOrUsername || !password)
    return next(new ErrorResponse("Please provide an emailId/username an password", 400))

    try {
        const { user, token, company } = await loginUser(emailIdOrUsername, password, next);

        res.status(200).json({ success: true, user, token, company});

    } catch (error) {
        return next(error);
    }
}

exports.forgotPassword = async (req, res, next) => {
    const {emailId} = req.body;
    try {
        const response = await forgotPassword(emailId, next);

        res.status(201).json(response);
    } catch (error) {
        return next(error);
    }
}

exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = req.params.resetToken;
    const password = req.body.password;

    try {
        const response = await resetPassword(resetPasswordToken, password);

        res.status(201).json(response);
    } catch (error) {
        return next(error);
    }
}

exports.emailConfirmation = async (req, res, next) => {
    const emailId = req.body;
    try {
        const response = await sendEmailConfirmation(emailId.emailId, next);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}