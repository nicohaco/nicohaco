// @flow

import { put, select, takeLatest } from 'redux-saga/effects';
import { getNico } from './selectors';
import { formatApiSchema } from '../utils/format';

import type { Effect } from 'redux-saga';
import type { FetchRanking } from '../types/actions/ranking';

/**
 * fetch ranking from niconico
 * @param {FetchRanking} action
 */
function *fetchRanking(action: FetchRanking): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    let ranking = yield nico.video.getRanking(
      action.category, action.target, action.period
    );

    if (ranking) {
      ranking = ranking.map((item) => (formatApiSchema({
        ...item,
        postedDate: item.postedDate
          .replace(/[年|月]/g, '/')
          .replace(/：/g, ':')
          .replace(/日/, ' - ')
      })));
    }

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
