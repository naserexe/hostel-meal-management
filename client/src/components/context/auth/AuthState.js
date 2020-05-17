import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer'

import setAuthToken from '../../../utils/setAuthToken'

import { REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/auth/register', formData, config);

      dispatch({
        type: REGISTER_SUCCESS, payload: res.data
      });
      loadUser();
    } catch (err) {
      console.log(err.response.data);
      dispatch({type: REGISTER_FAIL, payload: err.response.data.error})
    }
  } 

    // Login User
    const login = async formData => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      try {
        const res = await axios.post("/api/auth/login", formData, config);
  
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        loadUser();
      } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
      }
    };
  

  const loadUser = async () => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth/me');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.error
      })
    }
  }

  return(
    <AuthContext.Provider
    value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      register,
      login,
      loadUser
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;