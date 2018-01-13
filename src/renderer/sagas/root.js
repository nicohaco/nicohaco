// @flow

import { put, take, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import type { Effect } from 'redux-saga';

/**
 * page
 */
function *routePage(): Generator<Effect, void, *> {
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
      type   : 'FETCH_USER_DATA_SUCCESS', // hmm... rename
      payload: {
        userData
      }
    });
    yield put(push('mylist'));
  }
  else {
    yield put(push('login'));
  }
}

/**
 * Root for page
 */
export default function *pageProcess(): Generator<Effect, void, *> {
  yield takeLatest('ROUTE_PAGE', routePage);
}
