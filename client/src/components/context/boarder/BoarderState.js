import React, { useReducer } from 'react';
import axios from 'axios';

import BoarderContext from './boarderContext';
import boarderReducer from './boarderReducer'


import { GET_ALL_BOARDER, BOARDER_ERROR } from '../types';

const BoarderState = props => {
  const initialState = {
    boarders:[],
    error: null
  }

  const [state, dispatch] = useReducer(boarderReducer, initialState);

  // Get All Boarder
  const getAllBoarder = async () => {
    
    try {
      const res = await axios.get('/api/auth/member');
      console.log(res)

      dispatch({type: GET_ALL_BOARDER, payload: res.data.data})
    } catch (err) {
      dispatch({type: BOARDER_ERROR, payload: err.response.data.error})
    }
  } 


  return(
    <BoarderContext.Provider
    value={{
      boarders: state.boarders,
      error: state.error,
      getAllBoarder,

    }}
    >
      {props.children}
    </BoarderContext.Provider>
  )
}

export default BoarderState;