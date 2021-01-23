import React, { useReducer } from 'react';
import axios from 'axios';
import moment from 'moment'
import MealContext from './mealContext';
import mealReducer from './mealReducer'


import {
  GET_ALL_MEAL,
  GET_SINGLE_BOARDER_MEAL,
  ADD_MEAL,
  MEAL_ERROR,
  CLOSE_NOTIFICATION,
  GET_TOTAL_MEAL_COUNT,
  CLEAR_ERRORS,
} from '../types';



const MealState = props => {
  const initialState = {
    allMeal:[],
    totalMealCount:null,
    boarderMeal:[],
    error: null,
    notification: false,
  }

  const [state, dispatch] = useReducer(mealReducer, initialState);

  // Get All Boarder
  const getAllMealList = async () => {
    
    try {
      const res = await axios.get('/api/meal/meal-list');

      dispatch({type: GET_ALL_MEAL, payload: res.data.data})
    } catch (err) {
      dispatch({type: MEAL_ERROR, payload: err.response.data.error});
      setTimeout(() => {
        dispatch({type: CLEAR_ERRORS});
      }, 3000);
    }
  }

  // Get total meal count
  const getTotalMealCount = async () => {
    
    try {
      const res = await axios.get('/api/meal/');

      dispatch({type: GET_TOTAL_MEAL_COUNT, payload: res.data.data})
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
      setTimeout(() => {
        dispatch({type: CLOSE_NOTIFICATION})
      }, 3000)
    } catch (err) {
      console.log('Error add');
      dispatch({type: MEAL_ERROR, payload: err.response.data.error})
    }
  }

  // Get single Boarder meal
  const getSingleBoarderMeal = async(boarderID) => {
    try {
      const res = await axios.get(`/api/meal/boarder/${boarderID}`);

      // Modify response for converting date format
      const boarderMeal = res.data.data.meal.map(m => {
        return {dateAdded: moment(m.dateAdded ).format('Do MMMM YYYY, h:mm:ss a'), mealCount: m.mealCount}
      });

      dispatch({
        type: GET_SINGLE_BOARDER_MEAL,
        payload: boarderMeal,
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
        totalMealCount: state.totalMealCount,
        boarderMeal: state.boarderMeal,
        error: state.error,
        notification: state.notification,
        addMeal,
        getAllMealList,
        getSingleBoarderMeal,
        getTotalMealCount,
      }}
    >
      {props.children}
    </MealContext.Provider>
  )
}

export default MealState;