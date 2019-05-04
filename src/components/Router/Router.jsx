import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      {/* <Route path='/basket' component={BasketPage}/> */}
    </Switch>
  );
}