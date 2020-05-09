const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    match: [
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please use correct email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: 6,
    select: false,
  },
  hostelName: {
    type: String,
    required: [true, 'Please add hostel name'],
    // eslint-disable-next-line
    minlength: [5, 'hostel name should be more than 5 character'],
    // eslint-disable-next-line
    match: [/^[a-zA-Z0-9\-]+$/, 'Your hostel name is not valid. Only characters A-Z, a-z, 0-9 and - are acceptable.'],
    unique: true,
  },
});


// Encrypt password using bcryptjs
ManagerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
ManagerSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match password to hashed password in database
ManagerSchema.methods.matchPassword = async function (enteredPassword) {
  const res = await bcrypt.compare(enteredPassword, this.password);
  return res;
};

module.exports = mongoose.model('Manager', ManagerSchema);
