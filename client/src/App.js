import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



import Dashboard  from './components/Dashboard';
import AddExpense from './components/Expenses/AddExpense'
import { Home } from './components/Home';

import Login from './components/auth/Login'
import Registration from './components/auth/Register'

import AuthState from './components/context/auth/AuthState';
import ExpenseState from './components/context/expense/ExpenseState';


import setAuthToken from './utils/setAuthToken';

import './App.css';
import PrivateRoute from './components/Routing/PrivateRoute';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ExpenseState>
        <BrowserRouter>
          <Fragment>
            <div className='App'>
              <Switch>
                <PrivateRoute exact path = '/' component={Dashboard}/>
                <PrivateRoute exact path = '/add' component={AddExpense}/>
                <Route exact path = '/login' render={() => <Home><Login/></Home>}/>
                <Route exact path = '/register' render={() => <Home><Registration/></Home>}/>
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </ExpenseState>
    </AuthState>
  );
}

export default App;
