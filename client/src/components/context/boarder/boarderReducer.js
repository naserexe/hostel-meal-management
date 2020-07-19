import { GET_ALL_BOARDER, BOARDER_ERROR } from '../types';
import BoarderState from './BoarderState';

export default (state, action) => {
  switch(action.type){
    case GET_ALL_BOARDER:
      return {
        ...state,
        boarders: action.payload
      }
    case BOARDER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}