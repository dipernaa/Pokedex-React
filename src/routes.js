import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import AppContainer from './layout/AppContainer';
import Detail from './detail/Detail';
import PokedexContainer from './pokedex/PokedexContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="pokemon" />
      <Route path="pokemon" component={PokedexContainer} title="Pokemon"/>
      <Route path="detail" component={Detail} showBackArrow title="Detail"/>
    </Route>
  </Router>
);

export default routes;
