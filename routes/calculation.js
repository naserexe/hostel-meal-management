const router = require('express').Router();

const { getMealRate, singleBoarderCost } = require('../controllers/calculationController');

const { protect, authorize } = require('../middleware/auth');

router.route('/meal-rate').get(protect, getMealRate);
router.route('/boarder-cost/:boarderId').get(protect, singleBoarderCost);

module.exports = router;
