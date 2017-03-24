'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import FixtureLayout from './components/FixtureLayout';

const routes = (
  <Route path="/" component={FixtureLayout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
    <Route path="/fixtures" component={FixtureLayout}/>
  </Route>
);

export default routes;
