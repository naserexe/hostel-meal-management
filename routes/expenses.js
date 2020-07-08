const router = require('express').Router();

const { addExpense, getAllExpense, deleteExpenses } = require('../controllers/expensesController');

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .post(protect, authorize('manager'), addExpense)
  .get(protect, authorize('manager', 'boarder'), getAllExpense);

router.route('/:id')
  .delete(protect, authorize('manager'), deleteExpenses);

module.exports = router;
