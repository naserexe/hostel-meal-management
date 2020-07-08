const router = require('express').Router();

const { addExpense, getAllExpense } = require('../controllers/expensesController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .post(protect, authorize('manager'), addExpense)
  .get(protect, authorize('manager', 'boarder'), getAllExpense);


module.exports = router;
