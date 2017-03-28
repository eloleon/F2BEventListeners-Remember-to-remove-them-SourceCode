/**
 * Created with WebStorm.
 */
// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Page1 from './components/PageOne';
import Page2 from './components/PageTwo';
import Page3 from './components/PageThree';


const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
      <Route path='/page3' component={Page3}/>
    </Route>
  </Router>
);

export default Routes;
