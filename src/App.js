import './assets/styles/style.scss';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
