const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { getTotalMeal, getTotalMealOfaBoarder } = require('../helper/dataRetrieveHelper');

const User = require('../models/User');

// @desc    Add meal to member
// @route   POST /api/meal
// @access  Private
exports.addMeal = asyncHandler(async (req, res, next) => {
  if (!req.body.mealCount || !req.body.user_id) {
    return next(new ErrorResponse('Meal and user_id is required', 401));
  }

  const addMealToUser = await User
    .findOneAndUpdate(
      { _id: req.body.user_id, hostelName: req.user.hostelName },
      { $push: { meal: { $each: [{ mealCount: req.body.mealCount }] } } },
      { new: true },
    ).select('meal name');

  res.status(200).json({ success: true, data: addMealToUser });
});

// @desc    Get Total Meal
// @route   GET /api/meal
// @access  Private
exports.getTotalMeal = asyncHandler(async (req, res) => {
  const totalMeal = await getTotalMeal(req);
  res.status(200).json({ success: true, data: totalMeal });
});

// @desc    Get meals of a boarder
// @route   POST /api/meal/boarder
// @access  Private
exports.getSingleBoarderMeal = asyncHandler(async (req, res, next) => {
  const boarderMeal = await User.findById(req.params.boarder_id).select('meal name');

  if (!boarderMeal) return next(new ErrorResponse('No boarder found with id', 404));

  res.status(200).json({ success: true, data: boarderMeal });
});

// @desc    Get total amount of meal of a boarder
// @route   POST /api/meal/boarder
// @access  Private
exports.getSingleBoarderTotalMeal = asyncHandler(async (req, res, next) => {
  const totalMeal = await getTotalMealOfaBoarder(req, req.params.boarder_id);

  if (!totalMeal) return next(new ErrorResponse('No boarder found with the id', 404));

  res.status(200).json({ success: true, data: totalMeal });
});

// @desc    Get All Meal List
// @route   GET /api/meal/
// @access  Private
exports.getAllMealList = asyncHandler(async (req, res) => {
  const allMealList = await User.find({ hostelName: req.user.hostelName })
    .select('meal name')
    .sort({ dateAdded: -1 });

  res.status(200).json({ success: true, data: allMealList });
});
