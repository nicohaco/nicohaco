// @flow

/* eslint-disable flowtype/space-after-type-colon */

import { ipcRenderer } from 'electron';
import { takeEvery, effects } from 'redux-saga';
import { push } from 'react-router-redux';
import Nico from 'nico-api';
import { getNico } from './selectors';

import type { Effect } from 'redux-saga';
import type {
  Login,
  CreateNicoInstance
} from '../types/actions/auth';

const {
  put,
  take,
  select
} = effects;

/**
 * login
 * @param {Login} action
 */
function *login(action: Login): Generator<Effect, void, *> {
  try {
    const nico = new Nico({
      mail    : action.mail,
      password: action.password
    });


    const userSession = yield nico.login.call(nico);

    if (userSession) {
      yield put({
        type   : 'CREATE_NICO_INSTANCE',
        session: userSession
      });

      yield put({ type: 'FETCH_MY_DATA' });

      const nico = yield select(getNico);
      const { payload } = yield take('FETCH_MY_DATA_SUCCESS');

      yield put({
        type   : 'INSERT_USER_DATA',
        payload: {
          userData: Object.assign({}, payload.userData, {
            session: nico.cookie
          })
        }
      });

      yield put({ type: 'ROUTE_PAGE' });
    }
    else {
      throw {
        code: 'LOGIN_FAILURES'
      };
    }
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * logout
 */
function *logout(): Generator<Effect, void, *> {
  try {
    yield put({
      type: 'PUSH_PAGE',
      path: '/login'
    });
    yield put({ type: 'DELETE_USER_DATA' });
    yield put({ type: 'RESET' });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * create new Nico instance
 * @param {Createnicoinstance} action
 */
function *createNicoInstance(action: CreateNicoInstance):
  Generator<Effect, void, *>
{
  try {
    const nico = new Nico({ cookie: action.session });

    yield put({
      type   : 'INSERT_NICO_INSTANCE',
      payload: {
        nicoInstance: nico
      }
    });

    yield ipcRenderer.send('setCookie', action.session);
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * validate user nico session
 */
function *validateUserSession(): Generator<Effect, void, *> {
  try {
    yield put({ type: 'SHOW_USER_DATA' });

    const userData = yield take('SHOW_USER_DATA_SUCCESS');

    // [TODO] deficiency ?
    const {
      session
    } = userData.payload.userData[userData.payload.userData.length - 1] || '';

    yield put({
      type   : 'VALIDATE_USER_SESSION_RESULT',
      payload: {
        userData:
          userData.payload.userData[userData.payload.userData.length - 1],
        verificationResult: !!session
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

function *fetchOwnData(): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const userData = yield nico.user.getInfo();

    yield put({
      type   : 'FETCH_OWN_DATA_SUCCESS',
      payload: {
        userData
      }
    });
  } catch (e) {
    console.error(e);
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
  yield takeEvery('LOGIN', login);
  yield takeEvery('LOGOUT', logout);
  yield takeEvery('FETCH_OWN_DATA', fetchOwnData);
  yield takeEvery('CREATE_NICO_INSTANCE', createNicoInstance);
  yield takeEvery('VALIDATE_USER_SESSION', validateUserSession);
}
