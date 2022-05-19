const axios = require("axios");
const { sendEmail } = require("../utils/service/email");
const { clientUrl, serverUrl } = require("../../config/vars");

exports.sendConfirmationMail = async (emailId, emailVerifyToken) => {
  try {
    const emailVerifyUrl = `${serverUrl}/v1/users/verifyEmail/${emailVerifyToken}`;

    const subject = "Mail to verify email id.";
    // const message = `
    //         <p>Please go to this link to verify your email</p>
    //         <a href=${emailVerifyUrl} clicktracking=off>here</a>`;

    const message = `
              <div className="verifyEmail mt-4">
                <div className="verify_container">
                  <div className='verify-header '>
                    <div className='d-flex justify-content-center'>
                      <div className='verifyline align-self-center mx-3'></div>
                      <FaEnvelope style={{ fontSize: '3em' }} />
                      <div className='verifyline align-self-center mx-3'></div>
                    </div>
                    <div className="verify-thanks text-center my-3">THANKS FOR SIGNING UP!</div>
                    <div className='text-center verify-email' >Verify your Email Address</div>
                  </div>
                  <div className='d-flex justify-content-center mt-4 verify-text-1'>Hi, </div>
                  <div className='text-center verify-text-2'>
                    You are almost ready to get started.
                    Your E-mail id has not yet been verified.
                    Please, click on the button below to verify your email address.
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='verify-link-button ' ><a href=${emailVerifyUrl} clicktracking=off>Verify Email</a></button>
                  </div>
                  <div className='d-flex justify-content-center mt-3 verify-text-3'> Thanks,</div>
                  <div className='d-flex justify-content-center verify-text-3'>CDC, IIT(ISM) Dhanbad</div>
                </div>
              </div>`;

    await sendEmail(emailId, subject, message);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

exports.sendResetPasswordMail = async (emailId, resetToken) => {
  try {
    const resetUrl = `${clientUrl}/passwordReset/${resetToken}`;

    const subject = "Mail to reset your Password";

    const message = `<h1>You have requested a password reset</h1>
                <p>Please go to this link to reset your password</p>
                <a href=${resetUrl} clicktracking=off>here</a>`;

    await sendEmail(emailId, subject, message);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

exports.sendInvitationMailToCompany = async (emailId, username, password) => {
  try {
    const subject =
      "Invitation for Internship/Placements Season of IIT(ISM) Dhanbad";

    const message = `<h3>You are invited</h3>
                        <h4>Username: ${username}</h4>
                        <h4>Password: ${password}</h4>`;

    await sendEmail(emailId, subject, message);
    console.log("here");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
