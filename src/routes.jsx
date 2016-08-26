import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './containers/root';
import Home from './containers/home';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
  </Route>
);
