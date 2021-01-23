const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const { getTotalExpenseCost } = require('../helper/dataRetrieveHelper');

const Expense = require('../models/Expense');

// @desc    Add Expense
// @route   POST /api/expenses
// @access  Private
exports.addExpense = asyncHandler(async (req, res) => {
  req.body.user = req.user.id;

  const expense = await Expense.create(req.body);

  res.status(200).json({ success: true, data: expense });
});

// @desc    Get all expense
// @route   POST /api/expenses
// @access  Private
exports.getAllExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.find({ user: req.user.id })
    .populate('marketer', 'name')
    .sort({ dateAdded: -1 });

  if (!expense || expense.length < 1) {
    return next(new ErrorResponse('No expenses added so far', 404));
  }

  res.status(200).json({ success: true, data: expense });
});

// @desc    Delete Expenses
// @route   POST /api/expenses
// @access  Private
exports.deleteExpenses = async (req, res) => {
  const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: deletedExpense, message: 'Successfully deleted' });
};

// @desc    Get total expense cost
// @route   POST /api/expenses/cost
// @access  Private
exports.getTotalExpenseCost = asyncHandler(async (req, res) => {
  const totalCost = await getTotalExpenseCost(req);

  res.status(200).json({ success: true, data: totalCost });
});
