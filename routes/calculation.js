const router = require('express').Router();

const { getMealRate, singleBoarderCost, finalCalculation, endCalculation } = require('../controllers/calculationController');

const { protect } = require('../middleware/auth');

router.route('/meal-rate').get(protect, getMealRate);
router.route('/boarder-cost/:boarderId').get(protect, singleBoarderCost);
router.route('/').get(protect, finalCalculation);
router.route('/end').get(protect, endCalculation);

module.exports = router;
