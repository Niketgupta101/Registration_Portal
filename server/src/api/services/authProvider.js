const { v4: uuidv4 } = require('uuid');
const User = require('../models/userModel');
const Company = require('../models/company_details');
const {
  sendConfirmationMail,
  sendResetPasswordMail,
} = require('./emailProvider');
const ErrorResponse = require('../utils/errorResponse');

exports.registerUser = async (user, next) => {
  if (Object.keys(user).includes('email_check')) {
    try {
      let oldUser = await User.findOne({ emailId: user.emailId });
      if (oldUser)
        return next(new ErrorResponse('Email Id already in use.', 400));
      else return { email_check: 1 };
    } catch (error) {
      return next(error);
    }
  } else {
    try {
      user.emailVerifyToken = uuidv4();

      // user.isemailVerified = true ;

      const newUser = await User.create(user);

      sendConfirmationMail(newUser.emailId, newUser.emailVerifyToken);

      const token = newUser.getSignedToken();

      return { newUser, token };
    } catch (error) {
      return next(error);
    }
  }
};

exports.loginUser = async (emailIdOrUsername, password, next) => {
  try {
    const user = await User.findOne({
      $or: [{ emailId: emailIdOrUsername }],
    }).select('+password');

    if (!user) return next(new ErrorResponse('Email not registered', 401));

    const check = await user.matchPasswords(password);

    if (!check) return next(new ErrorResponse('Wrong Password', 404));

    let company = await Company.find({ userId: user._id });

    const token = user.getSignedToken();

    return { user, token, company };
  } catch (error) {
    return next(error);
  }
};

exports.forgotPassword = async (emailId, next) => {
  try {
    const user = await User.findOne({ emailId });

    if (!user) {
      return next(new ErrorResponse('Email could not be sent', 404));
    }

    
    const resetToken = uuidv4();

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    await user.save();

    try {
      await sendResetPasswordMail(user.emailId, resetToken);

      return { success: true, message: 'Email Sent' };
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse('Email could not be sent', 500));
    }
  } catch (error) {
    return next(error);
  }
};

exports.resetPassword = async (resetPasswordToken, password) => {
  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return next(new ErrorResponse('Invalid Reset Token', 400));

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return { success: true, data: 'Password Reset Success' };
  } catch (error) {
    return next(error);
  }
};

exports.sendEmailConfirmation = async (emailId, next) => {
  try {
    let user = await User.findOne({ emailId });

    if (!user) return next(new ErrorResponse('User not registered', 400));

    user.set({ emailVerifyToken: uuidv4() });

    await user.save();

    await sendConfirmationMail(emailId, user.emailVerifyToken);

    return { success: true, message: `Mail sent to ${emailId}` };
  } catch (error) {
    return next(error);
  }
};
