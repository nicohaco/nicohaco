// @flow

import { put, select, takeLatest } from 'redux-saga/effects';
import { getNico } from './selectors';

import type { Effect } from 'redux-saga';
import type { FetchRanking } from '../types/actions/ranking';

/**
 * fetch ranking from niconico
 * @param {FetchRanking} action
 */
function *fetchRanking(action: FetchRanking) {
  try {
    const nico = yield select(getNico);
    const ranking = yield nico.video.getRanking(
      action.category, action.target, action.period
    );

    yield put({
      type   : 'FETCH_RANKING_SUCCESS',
      payload: {
        ranking
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
 * Root for ranking
 */
export default function *rankingProcess(): Generator<Effect, void, *> {
  yield takeLatest('FETCH_RANKING', fetchRanking);
}
