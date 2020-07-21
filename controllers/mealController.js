const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { getTotalMeal } = require('../helper/dataRetrieveHelper')

const User = require('../models/User');

// @desc    Add meal to member
// @route   POST /api/meal
// @access  Private
exports.addMeal = asyncHandler(async (req, res, next) => {
  if (!req.body.meal || !req.body.user_id) {
    return next(new ErrorResponse('Meal and user_id is required', 401));
  }

  const addMealToUser = await User
    .findOneAndUpdate(
      { _id: req.body.user_id, hostelName: req.user.hostelName },
      { $inc: { meal: req.body.meal } },
      { new: true },
    );

  res.status(200).json({ success: true, data: addMealToUser });
});

// @desc    Get Total Meal
// @route   GET /api/meal
// @access  Private
exports.getTotalMeal = asyncHandler(async (req, res) => {
  // const depositAmount = await User.find({ hostelName: req.user.hostelName });

  // const totalMeal = depositAmount
  //   .reduce((prev, nextValue) => prev + nextValue.meal, 0);

  const totalMeal = await getTotalMeal(req);
  res.status(200).json({ success: true, data: totalMeal });
});
