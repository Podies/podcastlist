import React from 'react';
import App from './components/App';
import { Route, IndexRoute } from 'react-router';
import Landing from './components/Landing';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/SearchPage';

export default (
  <Route component={App} path="/" >
    <IndexRoute component={Landing} />
    <Route component={SearchPage} path='/search' />
    <Route component={CategoryPage} path='/:category' />
  </Route>
);
