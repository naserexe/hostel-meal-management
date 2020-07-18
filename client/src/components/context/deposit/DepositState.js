import React, { useReducer } from 'react';
import axios from 'axios';

import DepositContext from './depositContext';
import depositReducer from './depositReducer'


import { GET_TOTAL_DEPOSIT_AMOUNT, DEPOSIT_ERROR } from '../types';

const DepositState = props => {
  const initialState = {
    totalDepositAmount:null,
    error: null
  }

  const [state, dispatch] = useReducer(depositReducer, initialState);

  // Get total deposited amount
  const getTotalDepositedAmount = async () => {
    
    try {
      const res = await axios.get('/api/deposit');
      console.log(res)

      dispatch({type: GET_TOTAL_DEPOSIT_AMOUNT, payload: res.data.data})
    } catch (err) {
      dispatch({type: DEPOSIT_ERROR, payload: err.response.data.error})
    }
  } 


  return(
    <DepositContext.Provider
    value={{
      totalDepositAmount: state.totalDepositAmount,
      error: state.error,
      getTotalDepositedAmount,

    }}
    >
      {props.children}
    </DepositContext.Provider>
  )
}

export default DepositState;