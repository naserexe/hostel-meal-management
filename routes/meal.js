const router = require('express').Router();

const { addMeal, getTotalMeal } = require('../controllers/mealController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .post(protect, authorize('manager'), addMeal)
  .get(protect, getTotalMeal);

module.exports = router;
