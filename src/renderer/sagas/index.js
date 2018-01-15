// @flow

import { all, fork } from 'redux-saga/effects';
import db from './db';
import auth from './auth';
import user from './user';
import page from './page';
import root from './root';
import error from './error';
import mylist from './mylist';
import search from './search';
import player from './player';
import ranking from './ranking';

import type { Effect } from 'redux-saga';

/**
 * Root for saga
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield all([
    fork(db),
    fork(auth),
    fork(user),
    fork(page),
    fork(root),
    fork(error),
    fork(mylist),
    fork(search),
    fork(player),
    fork(ranking)
  ]);
}

export default rootSaga;
