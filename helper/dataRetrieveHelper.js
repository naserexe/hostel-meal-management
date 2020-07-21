const User = require('../models/User');
const Expense = require('../models/Expense');
const asyncHandler = require('../middleware/async');

// Get total expense cost
exports.getTotalExpenseCost = asyncHandler(async (req) => {
  const expense = await Expense.find({ user: req.user.id });

  const totalCost = expense.reduce((prev, nextValue) => prev + nextValue.cost, 0);
  return totalCost;
});

// Get total meal of a hostel
exports.getTotalMeal = asyncHandler(async (req) => {
  const depositAmount = await User.find({ hostelName: req.user.hostelName });

  const totalMeal = depositAmount
    .reduce((prev, nextValue) => prev + nextValue.meal, 0);
  return totalMeal;
});

// Get total deposited amount
// exports.getTotalDepositAmount = asyncHandler(async (req) => {
//   const depositAmount = await User.find({ hostelName: req.user.hostelName });

//   const totalDepositAmount = depositAmount
//     .reduce((prev, nextValue) => prev + nextValue.depositAmount, 0);
//   return totalDepositAmount;
// });
