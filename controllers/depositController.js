const asyncHandler = require('../middleware/async');
const { getTotalDepositAmount } = require('../helper/dataRetrieveHelper')
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Deposit money to member
// @route   POST /api/deposit
// @access  Private
exports.deposit = asyncHandler(async (req, res, next) => {
  if (!req.body.depositAmount || !req.body.user_id) {
    return next(new ErrorResponse('Deposit amount and user_id is required', 401));
  }

  const depositedUser = await User
    .findOneAndUpdate(
      { _id: req.body.user_id, hostelName: req.user.hostelName },
      { $inc: { depositAmount: req.body.depositAmount } },
      { new: true },
    );

  if (!depositedUser) return next(new ErrorResponse('Your member not found with the given id', 404));

  return res.status(200).json({ success: true, data: depositedUser });
});

// @desc    Get total deposit amount
// @route   GET /api/deposit
// @access  Private
exports.getTotalDepositAmount = asyncHandler(async (req, res) => {
  const depositAmount = await User.find({ hostelName: req.user.hostelName });

  const totalDepositAmount = depositAmount
    .reduce((prev, nextValue) => prev + nextValue.depositAmount, 0);
  // const totalDepositAmount = await getTotalDepositAmount(req);
  res.status(200).json({ success: true, data: totalDepositAmount });
});
