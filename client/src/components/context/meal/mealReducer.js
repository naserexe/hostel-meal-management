import {
  ADD_MEAL,
  GET_ALL_MEAL,
  GET_SINGLE_BOARDER_MEAL,
  MEAL_ERROR,
  CLOSE_NOTIFICATION,
  GET_TOTAL_MEAL_COUNT,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch(action.type){
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    case GET_TOTAL_MEAL_COUNT:
      return {
        ...state,
        totalMealCount: action.payload
      }
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        notification: false,
      }
    case GET_SINGLE_BOARDER_MEAL:
      return {
        ...state,
        boarderMeal: action.payload
      }
    case ADD_MEAL:
      return {
        ...state,
        allMeal: [action.payload, ...state.allMeal],
        notification: true
      }
    case MEAL_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GET_ALL_MEAL:
      return {
        ...state,
        allMeal: action.payload
      }
    default:
      return state;
  }
}