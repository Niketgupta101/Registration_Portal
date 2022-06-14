const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');
const { jwtSecret } = require('../../config/vars');

const protect = async (req, res, next) => {
  let token;
  let access_token = req.cookies.access_token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  token = access_token || token;

  // console.log({ token, access_token });

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);

    const user = await User.findById(decoded.id);
    if (!user.isemailVerified)
      return next(new ErrorResponse('Email Id is not verified', 401));

    if (!user) {
      return next(new ErrorResponse('No user found with this id', 404));
    }

    req['user'] = user;
    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
};

// handling roles
const authorizeRoles = async (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(401).json({ message: 'Access Denied!' });
  }
  next();
};

// is user authorized to access.
const isAccesible = async (req, res, next) => {
  if (req.user._id !== req.params.id || req.user.role !== 'Admin') {
    return res.status(401).json({ message: 'Access Denied!' });
  }
  next();
};

module.exports = { protect, authorizeRoles, isAccesible };
