import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



import  Dashboard  from './components/Dashboard';
import { AddMarket } from './components/AddMarket';
import { Home } from './components/Home';

import ManagerLogin from './components/auth/manager/ManagerLogin'
import ManagerRegistration from './components/auth/manager/ManagerRegister'

import BoarderLogin from './components/auth/boarder/BoarderLogin'
import BoarderRegistration from './components/auth/boarder/BoarderRegister';

import AuthState from './components/context/auth/AuthState';


import setAuthToken from './utils/setAuthToken';

import './App.css';
import PrivateRoute from './components/Routing/PrivateRoute';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Fragment>
          <div className='App'>
            <Switch>
              <PrivateRoute exact path = '/' component={Dashboard}/>
              <Route exact path = '/add' render={() => <Dashboard><AddMarket/></Dashboard>}/>
              <Route exact path = '/manager/login' render={() => <Home><ManagerLogin/></Home>}/>
              <Route exact path = '/manager/register' render={() => <Home><ManagerRegistration/></Home>}/>
              <Route exact path = '/boarder/login' render={() => <Home><BoarderLogin/></Home>}/>
              <Route exact path = '/boarder/register' render={() => <Home><BoarderRegistration/></Home>}/>
            </Switch>
          </div>
        </Fragment>
    </BrowserRouter>
    </AuthState>
  );
}

export default App;
