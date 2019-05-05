import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MainBody from '../MainBody/MainBody';
import FullScreenImage from '../FullScreenImage/FullScreenImage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/breeds/:id' component={MainBody}/>
      <Route exact path='/images/:id' component={FullScreenImage} />
    </Switch>
  );
}