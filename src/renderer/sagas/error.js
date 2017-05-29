// @flow

import { takeEvery, effects } from 'redux-saga';

import type { Effect } from 'redux-saga';
import type { Error } from '../types/actions/error';

const { put } = effects;

/**
 * route Error
 */
function *routeError(action: Error): Generator<Effect, void, *> {
  const code = action.error.code || action.error.error.code;

  switch (code) {
    case 'NOAUTH':
      yield put({ type: 'ERROR_NOAUTH' });
      break;

    case 'LOGIN_FAILURES':
      yield put({ type: 'ERROR_LOGIN' });
      break;

    // video
    case 'ACCESS_DENIED':
      yield put({ type: 'ERROR_ACCESS_DENIED' });
      break;

      // video
    case 'DELETED':
      yield put({ type: 'ERROR_DELETED' });
      break;

    // mylist
    case 'EXIST':
      yield put({ type: 'ERROR_EXIST' });
      break;

    case 'SERVER_ERROR':
      yield put({ type: 'ERROR_SERVER' });
      break;

    case 'ENOTFOUND':
      yield put({ type: 'ERROR_NOTFOUND' });
      break;
  }
}

/**
 * catch user sesson error and then goes to login page
 */
function *errorNoauth() {
  alert('セッションが切れました.');

  yield put({ type: 'DELETE_USER_DATA' });
  yield put({
    type: 'PUSH_PAGE',
    path: 'login'
  });
}

/**
 * server error
 */
function errorServer() {
  alert('サーバーが混み合っています');
}

/**
 * invalid mail address or password when logging in
 */
function errorLogin() {
  alert('メールアドレスかパスワードが間違えています');
}

/**
 * already exists the video in this mylist
 */
function errorExist() {
  alert('すでにマイリストに動画が存在しています');
}

/**
 * the video was deleted
 */
function errorDeleted() {
  alert('削除された動画です');
}

/**
 * network error
 */
function errorNotfound() {
  alert('ネットワークに問題があります');
}

/**
 * access denied
 */
function errorAccessDenied() {
  alert('アクセスできない動画です');
}

/**
 * Error for error
 */
export default function *errorProcess(): Generator<Effect, void, *> {
  yield takeEvery('ERROR', routeError);
  yield takeEvery('ERROR_EXIST', errorExist);
  yield takeEvery('ERROR_LOGIN', errorLogin);
  yield takeEvery('ERROR_NOAUTH', errorNoauth);
  yield takeEvery('ERROR_SERVER', errorServer);
  yield takeEvery('ERROR_DELETED', errorDeleted);
  yield takeEvery('ERROR_NOTFOUND', errorNotfound);
  yield takeEvery('ERROR_ACCESS_DENIED', errorAccessDenied);
}
