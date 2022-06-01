const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');
const { jwtSecret } = require('../../config/vars');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }
  console.log(req.headers.authorization);
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
  console.log({ token });
  try {
    const decoded = jwt.verify(token, jwtSecret);

    console.log(decoded);
    const user = await User.findById(decoded.id);
    if (!user.isemailVerified)
      return next(new ErrorResponse('Email Id is not verified', 401));

    if (!user) {
      return next(new ErrorResponse('No user found with this id', 404));
    }

    req['user'] = user;
    next();
  } catch (error) {
    console.log(error);
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
