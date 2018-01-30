// @flow

import type { OwnData } from '../apis/user';
import type { UserData } from '../states/auth';

export type Login = {
  type: 'LOGIN';
  mail: string;
  password: string;
};

export type Logout = {
  type: 'LOGOUT';
};

export type Reset = {
  type: 'RESET';
};

export type CreateNicoInstance = {
  type: 'CREATE_NICO_INSTANCE';
  session: string;
};

export type ValidateUserSession = {
  type: 'VALIDATE_USER_SESSION';
};

export type RoutePage = { // TODO: ???
  type: 'ROUTE_PAGE';
};

/**
 * from saga
 */

export type InsertUserData = {
  type: 'INSERT_USER_DATA';
  payload: {
    userData: UserData;
  };
};

export type InsertUserSession = {
  type: 'INSERT_NICO_INSTANCE';
  payload: {
    nicoInstance: Object; // eslint-disable-line flowtype/no-weak-types
  };
};

export type ValidateUserSessionResult = {
  type: 'VALIDATE_USER_SESSION_RESULT';
};

export type FetchOwnDataSuccess = {
  type: 'FETCH_OWN_DATA_SUCCESS';
  payload: {
    userData: OwnData;
  };
};

export type Auth =
  Login |
  Logout |
  Reset |
  RoutePage |
  InsertUserSession |
  CreateNicoInstance |
  ValidateUserSession |
  FetchOwnDataSuccess |
  ValidateUserSessionResult;
