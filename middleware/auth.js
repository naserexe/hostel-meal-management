const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');

const Manager = require('../models/Manager');

// Protect Routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    // eslint-disable-next-line
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exits
  if (!token) {
    return next(new ErrorResponse('Not Authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.manager = await Manager.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse('Not Authorized to access this route', 401));
  }
});
