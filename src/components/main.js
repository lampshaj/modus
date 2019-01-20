import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home-page';
import BeerDetails from './beer-details';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/beerdetails/:beer" component={BeerDetails} />
  </Switch>
)

export default Main;
