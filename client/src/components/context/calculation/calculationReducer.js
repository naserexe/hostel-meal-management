import {
  GET_CALCULATION,
  CALCULATION_ERROR,
  GET_MEAL_RATE,
} from '../types';

export default (state, action) => {
  switch(action.type){
    case GET_MEAL_RATE:
      return {
        ...state,
        mealRate: action.payload
      }
    case GET_CALCULATION:
      return {
        ...state,
        calculation: action.payload
      }
    case CALCULATION_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}