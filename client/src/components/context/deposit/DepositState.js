import React, { useReducer } from 'react';
import axios from 'axios';

import DepositContext from './depositContext';
import depositReducer from './depositReducer'


import { GET_TOTAL_DEPOSIT_AMOUNT, DEPOSIT_ERROR, ADD_DEPOSIT } from '../types';

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

  // Deposit money to boarder
  const addDeposit = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/deposit/', formData, config);
      console.log(res)
      dispatch({
        type: ADD_DEPOSIT
      });
    } catch (err) {
      console.log('Error add');
      dispatch({type: DEPOSIT_ERROR, payload: err.response.data.error})
    }
  } 

  return(
    <DepositContext.Provider
    value={{
      totalDepositAmount: state.totalDepositAmount,
      error: state.error,
      getTotalDepositedAmount,
      addDeposit

    }}
    >
      {props.children}
    </DepositContext.Provider>
  )
}

export default DepositState;