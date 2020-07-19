const router = require('express').Router();

const { deposit, getTotalDepositAmount } = require('../controllers/depositController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .post(protect, authorize('manager'), deposit)
    .get(protect, getTotalDepositAmount);



module.exports = router;
