// @flow

import type { UserData } from '../states/auth';

export type Login = {
  type: 'LOGIN';
  mail: string;
  password: string;
};

export type Logout = {
  type: 'LOGOUT';
};

export type ShowUserSession = {
  type: 'SHOW_USER_SESSION';
};

export type CreateNicoInstance = {
  type: 'CREATE_NICO_INSTANCE';
  session: string;
};

export type ValidateUserSession = {
  type: 'VALIDATE_USER_SESSION';
};

export type RoutePage = {
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

export type Auth =
  Login |
  Logout |
  RoutePage |
  ShowUserSession |
  InsertUserSession |
  CreateNicoInstance |
  ValidateUserSession |
  ValidateUserSessionResult;
