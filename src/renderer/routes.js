// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import Me from './containers/Users/Me';
import App from './components/App';
import Root from './containers/Root';
import Login from './containers/Login';
import Users from './containers/Users/User';
import Search from './containers/Search/Search';
import Mylist from './containers/Mylist/Mylist';
import Ranking from './components/pages/Ranking';

const Router = () => (
  <App>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/users/me" component={Me} />
      <Route path="/users/:id" component={Users} />
      <Route path="/mylist/:id" component={Mylist} />
      <Route path="/search" component={Search} />
      <Route path="/Ranking/:id" component={Ranking} />
      <Route path="/" component={Root} /> {/* for validating user session */}
    </Switch>
  </App>
);

export default Router;
