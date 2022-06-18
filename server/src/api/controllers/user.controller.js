const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/vars');
const ErrorResponse = require('../utils/errorResponse');
const mongoose = require('mongoose');
const { verifyMailHtml, unverifyMailHtml } = require('../utils/verifyMailHtml');

const {
  verifyEmailService,
  fetchAllUsers,
  fetchUserWithId,
  editUserWithId,
  fetchUsersWithInfo,
} = require('../services/userProvider');

// To verify emailId
exports.verifyEmail = async (req, res, next) => {
  const emailVerifyToken = req.params.verifyToken;

  try {
    const user = await User.findOne({ emailVerifyToken });
    if (!user) return res.status(201).send(unverifyMailHtml());

    user.set({ isemailVerified: true });
    // user.set({ emailVerifyToken: undefined });
    await user.save();

    res.status(201).send(verifyMailHtml());
  } catch (error) {
    return next(error);
  }
};

// fetch user with the user id passed as a param
//  -> If the userId passed matches with the id of the currently logged user then return the complete info of the user
//  -> else return the info of the user that is not set as private
exports.fetchUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const _id = req.headers.authorization.split(' ')[1];
    const data = await fetchUserWithId(userId, _id);

    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// To update the details of the user with the given user Id.
exports.editUser = async (req, res, next) => {
  const updatedDetails = req.body;
  const _id = req.params.id;

  try {
    const updatedUser = await editUserWithId(updatedDetails, _id);

    res.status(201).json({ success: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await fetchAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

exports.searchUsers = async (req, res, next) => {
  const info = req.params.info;

  try {
    const users = await fetchUsersWithInfo(info, next);

    res.status(200).json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
