// @flow

/* eslint-disable flowtype/space-after-type-colon */

import { ipcRenderer } from 'electron';
import { put, select, takeLatest } from 'redux-saga/effects';
import Nico from 'nico-api';
import { getNico } from './selectors';

import type { Effect } from 'redux-saga';

function *fetchUserData(action): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const userData = yield nico.user.getUserInfo(action.id);

    yield put({
      type   : 'FETCH_USER_DATA_SUCCESS',
      payload: {
        userData
      }
    });
  } catch (e) {
    // yield put({ // TODO: fix
    //   type : 'ERROR',
    //   error: e
    // });
  }
}

function *fetchUserTimeline(action): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const payload = (yield nico.timeline.getUserTimeline(action.id)).data;

    yield put({
      type   : 'FETCH_USER_TIMELINE_SUCCESS',
      payload
    });
  } catch (e) {
    // yield put({ // TODO: fix
    //   type : 'ERROR',
    //   error: e
    // });
  }
}

function *fetchMyTimeline(): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const payload = yield nico.timeline.getMyAllTimeline();

    yield put({
      type   : 'FETCH_MY_TIMELINE_SUCCESS',
      payload
    });
  } catch (e) {
    // yield put({ // TODO: fix
    //   type : 'ERROR',
    //   error: e
    // });
  }
}

function *fetchMyFollowing(): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const payload = yield nico.user.getMyFollowing();

    yield put({
      type   : 'FETCH_MY_FOLLOWING_SUCCESS',
      payload
    });
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for auth
 */
export default function *authProcess(): Generator<Effect, void, *> {
  yield takeLatest('FETCH_USER_DATA', fetchUserData);
  yield takeLatest('FETCH_USER_TIMELINE', fetchUserTimeline);
  yield takeLatest('FETCH_MY_TIMELINE', fetchMyTimeline);
  yield takeLatest('FETCH_MY_FOLLOWING', fetchMyFollowing);
}
