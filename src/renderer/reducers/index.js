// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import mylist from './mylist';
import search from './search';
import player from './player';
import common from './common';
import ranking from './ranking';

const reducer = combineReducers({
  auth,
  router,
  mylist,
  search,
  player,
  common,
  ranking
});

export default reducer;
