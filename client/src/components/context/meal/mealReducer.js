import { ADD_MEAL, GET_ALL_MEAL, GET_SINGLE_BOARDER_MEAL, MEAL_ERROR } from '../types';

export default (state, action) => {
  switch(action.type){
    case GET_SINGLE_BOARDER_MEAL:
      return {
        ...state,
        boarderMeal: action.payload
      }
    case ADD_MEAL:
      return {
        ...state,
        allMeal: [action.payload, ...state.allMeal]
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