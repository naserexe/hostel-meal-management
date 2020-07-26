import React, { useReducer } from 'react';
import axios from 'axios';

import MealContext from './mealContext';
import mealReducer from './mealReducer'


import { GET_ALL_MEAL, GET_SINGLE_BOARDER_MEAL, ADD_MEAL, MEAL_ERROR } from '../types';
import AddMeal from '../../Meal/AddMeal';


const MealState = props => {
  const initialState = {
    allMeal:[],
    boarderMeal:[],
    error: null
  }

  const [state, dispatch] = useReducer(mealReducer, initialState);

  // Get All Boarder
  const getAllMealList = async () => {
    
    try {
      const res = await axios.get('/api/meal/meal-list');

      dispatch({type: GET_ALL_MEAL, payload: res.data.data})
    } catch (err) {
      dispatch({type: MEAL_ERROR, payload: err.response.data.error})
    }
  }

  // Add meal
  const addMeal = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/meal', formData, config);
      console.log(res.data.data.meal)
      dispatch({
        type: ADD_MEAL,
        payload: res.data.data
      });
    } catch (err) {
      console.log('Error add');
      dispatch({type: MEAL_ERROR, payload: err.response.data.error})
    }
  }

  // Get single Boarder meal
  const getSingleBoarderMeal = async(boarderID) => {
    try {
      const res = await axios.get(`/api/meal/boarder/${boarderID}`);
      dispatch({
        type: GET_SINGLE_BOARDER_MEAL,
        payload: res.data.data.meal
      });
    } catch (err) {
      console.log('Error add');
      dispatch({type: MEAL_ERROR, payload: err.response.data.error})
    }
  }


  return(
    <MealContext.Provider
      value={{
        allMeal: state.allMeal,
        boarderMeal: state.boarderMeal,
        error: state.error,
        addMeal,
        getAllMealList,
        getSingleBoarderMeal
      }}
    >
      {props.children}
    </MealContext.Provider>
  )
}

export default MealState;