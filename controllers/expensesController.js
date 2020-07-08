const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

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
  const expense = await Expense.find({ user: req.user.id });

  if (!expense) {
    return res.status(404).json({ success: false, data: 'No expenses found' });
  }

  res.status(200).json({ success: true, data: expense });
});

// @desc    Delete Expenses
// @route   POST /api/expenses
// @access  Private
exports.deleteExpenses = async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: 'Successfully deleted' });
};
