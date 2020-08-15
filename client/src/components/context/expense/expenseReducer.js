import {
  ADD_EXPENSE,
  EXPENSES_ERROR,
  GET_EXPENSES,
  GET_TOTAL_EXPENSE_COST,
  CLOSE_NOTIFICATION,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch(action.type){
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        notification: false,
      }
    case GET_TOTAL_EXPENSE_COST:
      return {
        ...state,
        totalExpenseCost: action.payload
      }
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
        notification: true
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