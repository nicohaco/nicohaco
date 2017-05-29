// @flow

import { takeEvery, effects } from 'redux-saga';
import { getNico } from './selectors';

import type { Effect } from 'redux-saga';
import type { SearchAction as Search } from '../types/actions/search';

const {
  put,
  select
} = effects;

/**
 * search
 */
function *search(action: Search): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const search = yield nico.video.search(action.params);

    yield put({
      type   : 'SEARCH_SUCCESS',
      payload: search
    });
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for search
 */
export default function *searchProcess(): Generator<Effect, void, *> {
  yield takeEvery('SEARCH', search);
}
