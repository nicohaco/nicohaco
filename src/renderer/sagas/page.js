// @flow

import { ipcRenderer } from 'electron';
import { put, takeLatest } from 'redux-saga/effects';
import { takeEvery, effects } from 'redux-saga';
import { push, goBack, goForward } from 'react-router-redux';

import type { Effect } from 'redux-saga';
import type { PushPage } from '../types/actions/page';

function *pushPage(action: PushPage): Generator<Effect, void, *> {
  yield put(push(action.path));
}

function *goForwardPage(action): Generator<Effect, void, *> {
  yield put(goForward());
}

function *goBackPage(action): Generator<Effect, void, *> {
  yield put(goBack());
}

/**
 * Root for page
 */
export default function *pageProcess(): Generator<Effect, void, *> {
  yield takeLatest('PUSH_PAGE', pushPage);
  yield takeLatest('GO_BACK_PAGE', goBackPage);
  yield takeLatest('GO_FORWARD_PAGE', goForwardPage);
}
