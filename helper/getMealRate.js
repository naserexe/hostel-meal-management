const { getTotalMeal, getTotalExpenseCost } = require('./dataRetrieveHelper');

exports.getMealRate = async (req) => {
  const totalMeal = await getTotalMeal(req);
  const totalExpense = await getTotalExpenseCost(req);

  const mealRate = Number((totalExpense / totalMeal).toFixed(2));
  return mealRate;
};
