const asyncHandler = require('../middleware/async');

const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');



// @desc    Deposit money to member
// @route   POST /api/deposit
// @access  Private
exports.deposit = asyncHandler(async (req, res, next) => {
    if(!req.body.depositAmount || !req.body.user_id){
        return next(new ErrorResponse('Deposit amount and user_id is required', 401));
    }
    const depositedUser = await User.updateOne({'hostelName': req.user.hostelName, '_id': req.body.user_id}, {$inc: {depositAmount: req.body.depositAmount}});

    return res.status(200).json({success: true, data: depositedUser});
});
