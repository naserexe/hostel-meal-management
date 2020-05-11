import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import  Dashboard  from './components/layout/Dashboard/Dashboard';
import { AddMarket } from './components/AddMarket';
import { Home } from './components/Home';
import { Border } from './components/Border';

import ManagerLogin from './components/auth/manager/ManagerLogin'
import ManagerRegistration from './components/auth/manager/ManagerRegister'

import BoarderLogin from './components/auth/boarder/BoarderLogin'
import BoarderRegistration from './components/auth/boarder/BoarderRegister'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route exact path='/manager/login' component={ManagerLogin}/>
        <Route exact path='/manager/registration' component={ManagerRegistration}/>

        <Route exact path='/boarder/login' component={BoarderLogin}/>
        <Route exact path='/boarder/registration' component={BoarderRegistration}/>
  
        <Dashboard>
            <Route exact path='/add' component={AddMarket}/>
            <Route exact path='/border' component={Border}/>
        </Dashboard>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
