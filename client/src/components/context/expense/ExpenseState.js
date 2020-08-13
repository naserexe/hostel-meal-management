import React, { useReducer } from 'react';
import axios from 'axios';

import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer'


import { ADD_EXPENSE, EXPENSES_ERROR, GET_EXPENSES, GET_TOTAL_EXPENSE_COST } from '../types';

const ExpenseState = props => {
  const initialState = {
    expenses:[],
    totalExpenseCost: null,
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
        type: ADD_EXPENSE, payload: res.data.data
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

  // Get total expense cost
  const getTotalExpenseCost = async () => {
    try {
      const res = await axios.get('/api/expenses/cost');
      console.log(res)

      dispatch({type: GET_TOTAL_EXPENSE_COST, payload: res.data.data})
    } catch (err) {
      dispatch({type: EXPENSES_ERROR, payload: err.response.data.error})
    }
  } 

  return(
    <ExpenseContext.Provider
    value={{
      expenses: state.expenses,
      totalExpenseCost: state.totalExpenseCost,
      error: state.error,
      addExpense,
      getExpenses,
      getTotalExpenseCost
    }}
    >
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseState;