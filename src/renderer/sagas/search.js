// @flow

import { put, select, takeLatest } from 'redux-saga/effects';
import { getNico } from './selectors';
import { formatApiSchema } from '../utils/format';

import type { Effect } from 'redux-saga';
import type { SearchAction as Search } from '../types/actions/search';

/**
 * search
 */
function *search(action: Search): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    let result = yield nico.video.search(action.params);

    result = result.map((item) => formatApiSchema(item));

    yield put({
      type   : 'SEARCH_SUCCESS',
      payload: {
        result,
        searchWord: action.params.q
      }
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
