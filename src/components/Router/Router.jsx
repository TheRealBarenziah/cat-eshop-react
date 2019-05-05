import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import RandomImage from '../FullScreenRandomImage/FullScreenRandomImage';
import FullScreenImage from '../FullScreenImage/FullScreenImage';
import BrowseBreedsPage from '../BrowseBreedsPage/BrowseBreedsPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/breeds/:id' component={BrowseBreedsPage}/>
      <Route exact path='/images/:id' component={FullScreenImage} />
      <Route exact path='/random-image' component={RandomImage} />
      <Route path='/' component={HomePage}/>
    </Switch>
  );
}