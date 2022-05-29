const path = require('path');

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config({
    path: path.join(__dirname, '../../.env'),
  });
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  clientUrl: process.env.CLIENT_URL,
  serverUrl: process.env.SERVER_URL,

  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongouri: process.env.MONGO_URI,

  EmailClientId: process.env.EMAIL_CLIENT_ID,
  EmailClientSecret: process.env.EMAIL_CLIENT_SECRET,
  EmailRedirectURL: process.env.EMAIL_REDIRECT_URL,
  EmailRefreshToken: process.env.EMAIL_REFRESH_TOKEN,
  EmailAccessToken: process.env.EMAIL_ACCESS_TOKEN,

  UploadClientId: process.env.UPLOAD_CLIENT_ID,
  UploadClientSecret: process.env.UPLOAD_CLIENT_SECRET,
  UploadRedirectURI: process.env.UPLOAD_REDIRECT_URI,
  UploadRefreshToken: process.env.UPLOAD_REFRESH_TOKEN,

  gs_client_email: process.env.CLIENT_EMAIL,
  gs_private_key: process.env.PRIVATE_KEY,

  convert_client_id: process.env.CONVERT_CLIENT_ID,
};
