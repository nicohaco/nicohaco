// @flow

import { takeEvery, effects } from 'redux-saga';
import { push } from 'react-router-redux';

import type { Effect } from 'redux-saga';
import type { PushPage } from '../types/actions/page';

const { put } = effects;

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
  yield* takeEvery('PUSH_PAGE', pushPage);
}
