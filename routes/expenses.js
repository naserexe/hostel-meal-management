const router = require('express').Router();

const {
  addExpense,
  getAllExpense,
  deleteExpenses,
  getTotalExpenseCost,
} = require('../controllers/expensesController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .post(protect, authorize('manager'), addExpense)
  .get(protect, authorize('manager', 'boarder'), getAllExpense);

router.route('/:id')
  .delete(protect, authorize('manager'), deleteExpenses);

router.route('/cost').get(protect, getTotalExpenseCost);

module.exports = router;
