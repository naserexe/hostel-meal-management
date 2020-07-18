import { GET_TOTAL_DEPOSIT_AMOUNT, DEPOSIT_ERROR } from '../types';

export default (state, action) => {
  switch(action.type){
    case GET_TOTAL_DEPOSIT_AMOUNT:
      return {
        ...state,
        totalDepositAmount: action.payload
      }
    default:
      return state;
  }
}