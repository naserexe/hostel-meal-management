const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Please add a name'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
  },
  cost: {
    type: Number,
    required: [true, 'Cost is required'],
  },
  marketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = mongoose.model('expense', ExpenseSchema);
