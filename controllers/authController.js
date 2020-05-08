const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.test = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ success: true });
});
