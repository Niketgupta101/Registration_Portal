const {
  EmailClientId,
  EmailClientSecret,
  EmailRedirectURL,
  EmailRefreshToken,
  EmailAccessToken,
} = require('../../../config/vars');
const { google } = require('googleapis');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const { env } = require('../../../config/vars');

const oAuth2Client = new google.auth.OAuth2(
  EmailClientId,
  EmailClientSecret,
  EmailRedirectURL
);
oAuth2Client.setCredentials({ refresh_token: EmailRefreshToken });

const createTransporter = async () => {
  const accessToken = await new Promise((resolve, reject) => {
    oAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token :(');
      }
      resolve(token);
    });
  });
  //   let accessToken = EmailAccessToken;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      type: process.env.AUTH_TYPE,
      user: process.env.EMAIL_USERNAME,
      clientId: EmailClientId,
      clientSecret: EmailClientSecret,
      refreshToken: EmailRefreshToken,
      accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};

exports.sendEmail = async (to, subject, html, text) => {
  var mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: to,
    subject: subject,
    html: html,
    text: text,
  };
  let emailTransporter = await createTransporter();
  emailTransporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { success: false, message: 'Mail could not be sent' };
    } else {
      return { success: true, message: 'Mail sent successfully' };
    }
  });
};

exports.sendMailWithAttachment = async (to, subject, html, text, cc, link) => {
  let emailTransporter = await createTransporter();
  emailTransporter.sendMail(
    {
      from: process.env.EMAIL_USERNAME,
      to,
      subject,
      html,
      text,
      cc,
      attachments: [
        {
          filename: 'JOB_FORM.pdf',
          path: link,
        },
      ],
    },
    function (err, success) {
      if (err) {
        // Handle error
        console.log(err);
      } else console.log('success');
    }
  );
};
