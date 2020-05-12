import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer'

import setAuthToken from '../../utils/setAuthToken'

import { REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR } from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register manager
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('api/auth/register', formData, config);

      dispatch({
        type: REGISTER_SUCCESS, payload: res.data
      });
      
    } catch (err) {
      
    }
  } 

  const loadUser = async () => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      })
    }
  }
}