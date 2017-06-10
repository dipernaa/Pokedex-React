import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from './layout/AppContainer';
import PokedexContainer from './pokedex/PokedexContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PokedexContainer}/>
    </Route>
  </Router>
);

export default routes;
