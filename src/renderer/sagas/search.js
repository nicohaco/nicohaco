// @flow

import { put, select, takeLatest } from 'redux-saga/effects';
import { getNico } from './selectors';

import type { Effect } from 'redux-saga';
import type { SearchAction as Search } from '../types/actions/search';

/**
 * search
 */
function *search(action: Search): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    let search = yield nico.video.search(action.params);

    search = search.map((item) => ({
      videoId: item.contentId,
      ...item
    }));

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
  yield takeLatest('SEARCH', search);
}
