import { GET_TOTAL_DEPOSIT_AMOUNT, DEPOSIT_ERROR, CLOSE_NOTIFICATION, ADD_DEPOSIT } from '../types';

export default (state, action) => {
  switch(action.type){
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        notification: false,
      }
    case ADD_DEPOSIT:
      return {
        ...state,
        notification: true
      }
    case GET_TOTAL_DEPOSIT_AMOUNT:
      return {
        ...state,
        totalDepositAmount: action.payload
      }
    case DEPOSIT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}