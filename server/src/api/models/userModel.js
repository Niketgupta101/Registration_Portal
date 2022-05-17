const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpirationInterval } = require('../../config/vars');

const userSchema = new mongoose.Schema({
  Name: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  emailId: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,

  isemailVerified: { type: Boolean, default: false },
  emailVerifyToken: String,

  ProfilePhoto: String,
  contactNo: String,

  role: {
    type: String,
    default: 'user',
    enum: ['Admin', 'user'],
  },

  Settings: {
    Notifications: { type: Boolean, default: true },
  },

  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, jwtSecret, {
    expiresIn: jwtExpirationInterval,
  });
};

userSchema.methods.getAccessibleData = function () {
  const accessibleData = {};
  const fields = ['_id', 'Name', 'emailId', 'ProfilePhoto', 'createdAt'];

  fields.forEach((field) => {
    accessibleData[field] = this[field];
  });

  return accessibleData;
};
module.exports = mongoose.model('User', userSchema);
