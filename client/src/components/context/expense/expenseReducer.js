import {  ADD_EXPENSE, EXPENSES_ERROR, GET_EXPENSES, GET_TOTAL_EXPENSE_COST } from '../types';

export default (state, action) => {
  switch(action.type){
    case GET_TOTAL_EXPENSE_COST:
      return {
        ...state,
        totalExpenseCost: action.payload
      }
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      }
    
      case GET_EXPENSES:
        return {
          ...state,
          expenses: action.payload
        }
      
    case EXPENSES_ERROR:
      return{
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}