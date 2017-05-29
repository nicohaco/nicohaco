// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import Root from './containers/Root';
import Login from './containers/Login';
import Search from './components/pages/Search';
import Mylist from './containers/Mylist/Mylist';
import Ranking from './components/pages/Ranking';

const Router = () => (
  <App>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/mylist" component={Mylist} />
      <Route path="/search" component={Search} />
      <Route path="/Ranking" component={Ranking} />
      <Route path="/" component={Root} /> {/* for validating user session */}
    </Switch>
  </App>
);

export default Router;
