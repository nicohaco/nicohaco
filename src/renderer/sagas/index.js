// @flow

import { effects } from 'redux-saga';
import db from './db';
import auth from './auth';
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
  yield [
    effects.fork(db),
    effects.fork(auth),
    effects.fork(page),
    effects.fork(root),
    effects.fork(error),
    effects.fork(mylist),
    effects.fork(search),
    effects.fork(player),
    effects.fork(ranking)
  ];
}

export default rootSaga;
