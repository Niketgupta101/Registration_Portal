const axios = require('axios');
const { sendEmail } = require('../utils/service/email');

exports.sendConfirmationMail = async (emailId, emailVerifyToken) => {
    try {
        const emailVerifyUrl = `http://localhost:5000/v1/users/verifyEmail/${emailVerifyToken}`;

        const subject = 'Mail to verify email id.'

        const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password</p>
            <a href=${emailVerifyUrl} clicktracking=off>here</a>`

        await sendEmail(emailId, subject, message);
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}

exports.sendResetPasswordMail = async (emailId, resetToken) => {
    try {
        const resetUrl = `http://localhost:3000/passwordReset/${resetToken}`;

        const subject = 'Mail to reset your Password'

        const message = `<h1>You have requested a password reset</h1>
                <p>Please go to this link to reset your password</p>
                <a href=${resetUrl} clicktracking=off>here</a>`

        await sendEmail(emailId, subject, message);

        return { success: true };
    } catch (error) {
        return { success: false };  
    }
}