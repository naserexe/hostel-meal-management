const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Manager = require('../models/Manager');


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({ success: true, token });
};


// @desc    Register a manager
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
  const {
    name, email, password, hostelName,
  } = req.body;

  // Create manager
  const manager = await Manager.create({
    name, email, password, hostelName,
  });

  sendTokenResponse(manager, 200, res);
});


// @desc    Logging user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for manager
  const manager = await Manager.findOne({ email }).select('+password');
  if (!manager) {
    return next(new ErrorResponse('Invalid credentials!', 401));
  }

  // Check if password match
  const isMatch = await manager.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials!', 401));
  }
  return sendTokenResponse(manager, 200, res);
});


// @desc    Get logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  const user = await Manager.findById(req.user.id);

  res.status(200).json({ success: true, data: user });
});
