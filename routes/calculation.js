const router = require('express').Router();

const { getMealRate, singleBoarderCost } = require('../controllers/calculationController');

const { protect } = require('../middleware/auth');

router.route('/meal-rate').get(protect, getMealRate);
router.route('/boarder-cost/:boarderId').get(protect, singleBoarderCost);

module.exports = router;
