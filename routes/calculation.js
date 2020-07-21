const router = require('express').Router();

const { getMealRate } = require('../controllers/calculationController');

const { protect, authorize } = require('../middleware/auth');

router.route('/').get(protect, getMealRate);

module.exports = router;
