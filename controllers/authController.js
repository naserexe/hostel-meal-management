const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const User = require('../models/User');

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

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  if (req.body.role === 'boarder') {
    const hostelName = await User.findOne({ hostelName: req.body.hostelName });
    if (!hostelName) {
      return next(new ErrorResponse('Your hostel not created yet', 404));
    }

    const user = await User.create(req.body);
    sendTokenResponse(user, 201, res);
  } else {
    // Check for hostel if already exist
    const isHostelName = await User.findOne({ hostelName: req.body.hostelName });
    if (isHostelName) {
      return next(new ErrorResponse('Hostel name you entered already exist', 401));
    }

    // Create new user
    const user = await User.create(req.body);

    sendTokenResponse(user, 200, res);
  }
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
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorResponse('Invalid credentials!', 401));
  }

  // Check if password match
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials!', 401));
  }
  return sendTokenResponse(user, 200, res);
});


// @desc    Get logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ success: true, data: user });
});


// @desc    Get all member
// @route   POST /api/deposit
// @access  Private
exports.getAllMember = asyncHandler( async (req, res, next)  => {
  const member = await User.find({hostelName: req.user.hostelName});

  res.status(200).json({success: true, data: member});
});