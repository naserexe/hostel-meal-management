import React, { useReducer } from 'react';
import axios from 'axios';

import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer'


import {
  ADD_EXPENSE,
  EXPENSES_ERROR,
  GET_EXPENSES,
  GET_TOTAL_EXPENSE_COST,
  CLOSE_NOTIFICATION,
  CLEAR_ERRORS,
  DELETE_EXPENSE
} from '../types';

const ExpenseState = props => {
  const initialState = {
    expenses:[],
    totalExpenseCost: null,
    notification:false,
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
      dispatch({
        type: ADD_EXPENSE, payload: res.data.data
      });
      setTimeout(() => {
        dispatch({type: CLOSE_NOTIFICATION})
      }, 3000)
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
      dispatch({type: EXPENSES_ERROR, payload: err.response.data.error});
      setTimeout(() => {
        dispatch({type: CLEAR_ERRORS});
      }, 3000);
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

   // Get total expense cost
  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`/api/expenses/${id}`);
      console.log(res)

      dispatch({type: DELETE_EXPENSE, payload: res.data.data})
    } catch (err) {
      dispatch({type: EXPENSES_ERROR, payload: err.response.data.error})
    }
  } 


  return(
    <ExpenseContext.Provider
    value={{
      expenses: state.expenses,
      totalExpenseCost: state.totalExpenseCost,
      notification: state.notification,
      error: state.error,
      addExpense,
      getExpenses,
      getTotalExpenseCost,
      deleteExpense,
    }}
    >
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseState;