const axios = require('axios');
const { sendEmail } = require('../utils/service/email');
const { clientUrl, serverUrl } = require('../../config/vars');

exports.sendConfirmationMail = async (emailId, emailVerifyToken) => {
    try {
        const emailVerifyUrl = `${serverUrl}/v1/users/verifyEmail/${emailVerifyToken}`;

        const subject = 'Mail to verify email id.'

        const message = `
            <p>Please go to this link to verify your email</p>
            <a href=${emailVerifyUrl} clicktracking=off>here</a>`

        await sendEmail(emailId, subject, message);
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}

exports.sendResetPasswordMail = async (emailId, resetToken) => {
    try {
        const resetUrl = `${clientUrl}/passwordReset/${resetToken}`;

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

exports.sendInvitationMailToCompany = async (emailId, username, password) => {
    try {
        const subject = 'Invitation for Internship/Placements Season of IIT(ISM) Dhanbad'

        const message = `<h3>You are invited</h3>
                        <h4>Username: ${username}</h4>
                        <h4>Password: ${password}</h4>`

        await sendEmail(emailId, subject, message);
        console.log("here");
        return { success: true };
    } catch (error) {
        return { success: false };  
    }
}