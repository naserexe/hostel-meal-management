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
    // const depositedUser = await User.findById(req.body.user_id);

    // if(depositedUser.hostelName != req.user.hostelName){
    //     return next(new ErrorResponse('Member not found with the given id', 404))
    // }

    // await depositedUser.updateOne({$inc: {depositAmount: req.body.depositAmount}}, {new: true});

    const depositedUser = await User.findOneAndUpdate({_id: req.body.user_id, hostelName: req.user.hostelName}, {$inc: {depositAmount: req.body.depositAmount}},{new: true});

    if(!depositedUser) return next(new ErrorResponse('Your member not found with the given id', 404))

    return res.status(200).json({success: true, data: depositedUser});
});
