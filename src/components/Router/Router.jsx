import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MainBody from '../MainBody/MainBody';
import RandomImage from '../FullScreenRandomImage/FullScreenRandomImage';
import FullScreenImage from '../FullScreenImage/FullScreenImage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/breeds/:id' component={MainBody}/>
      <Route exact path='/random-image' component={RandomImage} />
      <Route exact path='/images/:id' component={FullScreenImage} />
      <Route exact path='/' component={HomePage}/>
    </Switch>
  );
}