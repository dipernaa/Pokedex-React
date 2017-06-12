import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import AppContainer from './layout/AppContainer';
import DetailContainer from './details/DetailContainer';
import PokedexContainer from './pokedex/PokedexContainer';

export const routeNames = {
  detail: 'detail',
  pokedex: 'pokedex'
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to={routeNames.pokedex} />
      <Route path={routeNames.pokedex} component={PokedexContainer} title="Pokemon"/>
      <Route path={routeNames.detail} component={DetailContainer} title="Detail" showBackArrow/>
    </Route>
  </Router>
);

export default routes;
