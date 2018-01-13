// @flow

import { put, takeLatest } from 'redux-saga/effects';
import { takeEvery, effects } from 'redux-saga';
import { push } from 'react-router-redux';

import type { Effect } from 'redux-saga';
import type { PushPage } from '../types/actions/page';

/**
 * page
 */
function *pushPage(action: PushPage): Generator<Effect, void, *> {
  yield put(push(action.path));
}

/**
 * Root for page
 */
export default function *pageProcess(): Generator<Effect, void, *> {
  yield takeLatest('PUSH_PAGE', pushPage);
}
