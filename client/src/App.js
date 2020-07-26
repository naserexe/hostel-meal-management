import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



import Dashboard  from './components/Dashboard';
import AddExpense from './components/Expenses/AddExpense'
import { Home } from './components/Home';

import Login from './components/auth/Login'
import Registration from './components/auth/Register'

import AuthState from './components/context/auth/AuthState';
import ExpenseState from './components/context/expense/ExpenseState';
import DepositState from './components/context/deposit/DepositState';
import BoarderState from './components/context/boarder/BoarderState';
import MealState from './components/context/meal/mealState';

import setAuthToken from './utils/setAuthToken';

import './App.css';
import PrivateRoute from './components/Routing/PrivateRoute';

import AddDeposit from './components/Deposit/AddDeposit';
import { ViewExpenses } from './components/Expenses/ViewExpenses';
import AddMeal from './components/Meal/AddMeal';
import { MealChart } from './components/Meal/MealChart';
import { MealByBoarder } from './components/Meal/MealByBoarder';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ExpenseState>
        <DepositState>
          <BoarderState>
            <MealState>
            <BrowserRouter>
              <Fragment>
                <div className='App'>
                  <Switch>
                    <PrivateRoute exact path = '/' component={Dashboard}/>
                    <PrivateRoute exact path = '/expense/add' component={AddExpense}/>
                    <PrivateRoute exact path = '/expense/view' component={ViewExpenses}/>
                    <PrivateRoute exact path = '/meal/add' component={AddMeal}/>
                    <PrivateRoute exact path = '/meal/view' component={MealChart}/>
                    <PrivateRoute exact path = '/meal/boarder' component={MealByBoarder}/>
                    <PrivateRoute exact path = '/deposit' component={AddDeposit}/>
                    <Route exact path = '/login' render={() => <Home><Login/></Home>}/>
                    <Route exact path = '/register' render={() => <Home><Registration/></Home>}/>
                  </Switch>
                </div>
              </Fragment>
            </BrowserRouter>
            </MealState>
          </BoarderState>
        </DepositState>
      </ExpenseState>
    </AuthState>
  );
}

export default App;
