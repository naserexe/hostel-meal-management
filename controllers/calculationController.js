const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { getMealRate } = require('../helper/getMealRate');

// const User = require('../models/User');
// const Expense = require('../models/Expense');

// @desc    Get Meal Rate
// @route   POST /api/meal
// @access  Private
exports.getMealRate = asyncHandler(async (req, res, next) => {
  const mealRate = await getMealRate(req);

  if (!mealRate) return next(new ErrorResponse('Something went wrong!'));

  res.status(200).json({ success: true, data: mealRate });
});
