const mongoose = require('mongoose');

const EndCalculation = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Please add a name'],
  },
  month: { type: Date },
  finalCalculation: [
    {
      name: String,
      totalMeal: Number,
      mealRate: Number,
      totalCost: Number,
      depositAmount: Number,
      dueOrGetReturn: Number,
    },
  ],
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('endCalculation', EndCalculation);
