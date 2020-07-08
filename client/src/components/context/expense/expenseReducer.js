import {  ADD_EXPENSE, EXPENSES_ERROR, GET_EXPENSES } from '../types';

export default (state, action) => {
  switch(action.type){
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: action.payload
      }
    
      case GET_EXPENSES:
        return {
          ...state,
          expenses: action.payload
        }
      
    case EXPENSES_ERROR:
      return{
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}