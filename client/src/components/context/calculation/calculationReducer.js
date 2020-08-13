import { GET_CALCULATION } from '../types';

export default (state, action) => {
  switch(action.type){
    case GET_CALCULATION:
      return {
        ...state,
        calculation: action.payload
      }
    default:
      return state;
  }
}