const ErrorResponse = require('../utils/errorResponse');
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  sendEmailConfirmation,
} = require('../services/authProvider');
const emailValidator = require('email-validator');
const { postCompanyDetails } = require('../services/companyProvider');
const { response } = require('express');

exports.register = async (req, res, next) => {
  if (Object.keys(req.body).includes('email_check')) {
    let userDetails = {
      emailId: req.body.email,
      email_check: 'true',
    };

    try {
      const email_check = await registerUser(userDetails, next);
      if (email_check != null)
        res
          .status(201)
          .json({ success: true, email_check: "Doesn't Already Exists" });
    } catch (error) {
      return next(error);
    }
  } else {
    const { user, company } = req.body;

    // if (!emailValidator.validate(user.emailId))
    //   return next(new ErrorResponse('Invalid Email-Id', 401));

    if (user.password !== user.confirmPassword)
      return next(new ErrorResponse("Passwords doesn't match", 402));

    // if (user.email.matches("^\\S+@gmail\\.com$")) {
    // return next(new ErrorResponse("Invalid Email-Id", 401));
    // }

    let userDetails = {
      Name: `${user.firstName} ${user.lastName}`,
      emailId: user.email,
      ...user,
    };

    try {
      const { newUser, token } = await registerUser(userDetails, next);
      let comp;
      if (newUser) {
        const response = await postCompanyDetails(
          { ...company, userId: newUser._id },
          next
        );
        comp = response.company;
      }
      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        })
        .status(201)
        .json({ success: true, newUser, token, company: comp });
    } catch (error) {
      return next(error);
    }
  }
};

exports.login = async (req, res, next) => {
  const { emailIdOrUsername, password } = req.body;

  if (!emailIdOrUsername || !password)
    return next(
      new ErrorResponse('Please provide an emailId/username and password', 400)
    );

  try {
    const loginResponse = await loginUser(emailIdOrUsername, password, next);
    if (loginResponse !== undefined) {
      const { user, token, company } = loginResponse;
      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        })
        .status(200)
        .json({ success: true, user, token, company });
    }
  } catch (error) {
    return next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { emailId } = req.body;
  try {
    const response = await forgotPassword(emailId, next);
    if (response !== undefined) res.status(201).json(response);
  } catch (error) {
    return next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = req.params.resetToken;
  const password = req.body.password;

  try {
    const response = await resetPassword(resetPasswordToken, password);

    res.status(201).json(response);
  } catch (error) {
    return next(error);
  }
};

exports.emailConfirmation = async (req, res, next) => {
  const emailId = req.body;
  try {
    const response = await sendEmailConfirmation(emailId.emailId, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
