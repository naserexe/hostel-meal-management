const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { getMealRate } = require('../helper/getMealRate');
const { getTotalMealOfaBoarder } = require('../helper/dataRetrieveHelper');
const User = require('../models/User');

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

// @desc    Get Meal cost of single Boarder
// @route   POST /api/calculate/boarder/:boarderID
// @access  Private
exports.singleBoarderCost = asyncHandler(async (req, res, next) => {
  const mealRate = await getMealRate(req);
  const totalMeal = await getTotalMealOfaBoarder(req, req.params.boarderId);

  if (!mealRate || !totalMeal) return next(new ErrorResponse('Server Error', 501));

  const totalCost = Math.round(mealRate * totalMeal);
  res.status(200).json({ success: true, data: totalCost });
});

// @desc    Get final calculation
// @route   GET /api/calculate
// @access  Private
exports.finalCalculation = asyncHandler(async (req, res) => {
  const allBoarder = await User.find({ hostelName: req.user.hostelName });

  const mealRate = await getMealRate(req);

  const finalCalculatedData = [];
  await Promise.all(allBoarder.map(async (singleBoarder) => {
    const totalMeal = await getTotalMealOfaBoarder(req, singleBoarder._id);
    const totalCost = Math.round(mealRate * totalMeal);
    const dueOrGetReturn = singleBoarder.depositAmount - totalCost;

    finalCalculatedData.push({
      name: singleBoarder.name,
      totalMeal,
      totalCost,
      mealRate,
      dueOrGetReturn,
    });
  }));

  res.status(200).json({ success: true, data: finalCalculatedData });
});
