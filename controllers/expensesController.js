const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const User = require('../models/User');
const Expense = require('../models/Expense');

exports.addExpense = async (req, res, next) => {
  req.body.user = req.user.id;
  const expense = await Expense.create(req.body);

  res.status(201).json({ success: true, data: expense });
};

exports.getAllExpense = async (req, res, next) => {
  const expense = await Expense.find({ user: req.user.id });

  if (!expense) {
    return res.status(404).json({ success: false, data: 'No expenses found' });
  }

  res.status(200).json({ success: true, data: expense });
};

exports.deleteExpenses = async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: 'Successfully deleted' });
};
