import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import RandomImage from '../FullScreenRandomImage/FullScreenRandomImage';
import FullScreenImage from '../FullScreenImage/FullScreenImage';
import BrowseBreedsPage from '../BrowseBreedsPage/BrowseBreedsPage';
import LegalMentionsPage from '../LegalMentionsPage/LegalMentionsPage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/breeds/:id' component={BrowseBreedsPage}/>
      <Route exact path='/images/:id' component={FullScreenImage} />
      <Route exact path='/random-image' component={RandomImage} />
      <Route exact path='/about' component={AboutUsPage} />
      <Route exact path='/legal-mentions' component={LegalMentionsPage} />
      <Route exact path='/' component={HomePage}/>
    </Switch>
  );
}