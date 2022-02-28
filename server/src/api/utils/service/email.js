const { EmailClientId, EmailClientSecret, EmailRedirectURL, EmailRefreshToken } = require("../../../config/vars");
const { google } = require('googleapis');
const nodemailer = require('nodemailer');


const oAuth2Client = new google.auth.OAuth2(EmailClientId, EmailClientSecret, EmailRedirectURL);
oAuth2Client.setCredentials({ refresh_token: EmailRefreshToken });


const createTransporter = async () => {
  
    const accessToken = await new Promise((resolve, reject) => {
      oAuth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });
  
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            type: process.env.AUTH_TYPE,
            user: process.env.EMAIL_USERNAME,
            clientId:EmailClientId,
            clientSecret:EmailClientSecret,
            refreshToken:EmailRefreshToken,
            accessToken:accessToken
        },
    });
  
    return transporter;
  };

exports.sendEmail = async (to, subject, html) => {

    var mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: to,
            subject: subject,
            // text: text,
            html: html
    };

    let emailTransporter = await createTransporter();

    emailTransporter.sendMail(mailOptions, function(error, info) {
        if(error)
        {
          console.log(error);
            return { success: false, message: 'Mail could not be sent' };
        }
        else{
          console.log(info);
            return { success: true, message: 'Mail sent successfully' };
        }
    })
}