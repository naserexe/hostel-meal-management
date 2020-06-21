const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  type: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  marketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = mongoose.model('expense', ExpenseSchema);
