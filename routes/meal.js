const router = require('express').Router();

const {
  addMeal,
  getTotalMeal,
  getSingleBoarderMeal,
  getSingleBoarderTotalMeal,
} = require('../controllers/mealController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .post(protect, authorize('manager'), addMeal)
  .get(protect, getTotalMeal);

router.route('/boarder/:boarder_id').get(protect, getSingleBoarderMeal);
router.route('/boarder/total/:boarder_id').get(protect, getSingleBoarderTotalMeal);

module.exports = router;
