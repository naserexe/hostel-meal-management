import React, { useReducer } from 'react';
import axios from 'axios';

import CalculateContext from './calculationContext';
import calculateReducer from './calculationReducer'


import {
  GET_CALCULATION,
  CALCULATION_ERROR,
  GET_MEAL_RATE
} from '../types';


const CalculateState = props => {
  const initialState = {
    calculation:null,
    mealRate: null,
    error: null
  }

  const [state, dispatch] = useReducer(calculateReducer, initialState);

  // Get meal rate
  const getMealRate = async () => {
  
    try {
      const res = await axios.get('/api/calculation/meal-rate');

      dispatch({type: GET_MEAL_RATE, payload: res.data.data})
    } catch (err) {
      dispatch({type: CALCULATION_ERROR, payload: err.response.data.error})
    }
  }

  // Get Final Calculation
  const getCalculation = async () => {
    try {
      const res = await axios.get('/api/calculation');
      dispatch({type: GET_CALCULATION, payload: res.data.data})
    } catch (err) {
      dispatch({type: CALCULATION_ERROR, payload: err.response.data.error})
    }
  }

  return(
    <CalculateContext.Provider
      value={{
        calculation: state.calculation,
        error: state.error,
        mealRate: state.mealRate,
        getCalculation,
        getMealRate
      }}>
      {props.children}
    </CalculateContext.Provider>
  )
}

export default CalculateState;