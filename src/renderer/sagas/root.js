// @flow

import { put, take, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import type { Effect } from 'redux-saga';

/**
 * page
 */
function *routePage(): Generator<Effect, void, *> {
  try {
    yield put({ type: 'VALIDATE_USER_SESSION' });

    const {
      userData,
      verificationResult
    } = (yield take('VALIDATE_USER_SESSION_RESULT')).payload;

    // logged in
    if (verificationResult) {
      yield put({
        type   : 'CREATE_NICO_INSTANCE',
        session: userData.session
      });
      yield put({
        type   : 'FETCH_OWN_DATA_SUCCESS',
        payload: {
          userData
        }
      });

      yield put(push('/users/me'));
    }
    else {
      yield put(push('/login'));
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for page
 */
export default function *pageProcess(): Generator<Effect, void, *> {
  yield takeLatest('ROUTE_PAGE', routePage);
}
