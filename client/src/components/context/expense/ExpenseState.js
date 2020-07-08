import React, { useReducer } from 'react';
import axios from 'axios';

import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer'


import { ADD_EXPENSE_FAIL, ADD_EXPENSE, EXPENSES_ERROR, GET_EXPENSES } from '../types';

const ExpenseState = props => {
  const initialState = {
    expenses:[],
    error: null
  }

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add Expenses
  const addExpense = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/expenses', formData, config);
      console.log(res)
      dispatch({
        type: ADD_EXPENSE, payload: res.data
      });
    } catch (err) {
      console.log('Error add');
      dispatch({type: EXPENSES_ERROR, payload: err.response.data.error})
    }
  } 

  // Get all expense
  const getExpenses = async () => {
  
    try {
      const res = await axios.get('/api/expenses');
      
      dispatch({
        type: GET_EXPENSES, payload: res.data.data
      });
    } catch (err) {
      console.log('Error add');
      dispatch({type: EXPENSES_ERROR, payload: err.response.data.error})
    }
  } 

  return(
    <ExpenseContext.Provider
    value={{
      expenses: state.expenses,
      error: state.error,
      addExpense,
      getExpenses
    }}
    >
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseState;