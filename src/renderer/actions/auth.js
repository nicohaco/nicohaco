// @flow

import type {
  Login,
  Logout
} from '../types/actions/auth';

export const login = (mail: string, password: string): Login => ({
  type: 'LOGIN',
  mail,
  password
});

export const logout = (): Logout => ({
  type: 'LOGOUT'
});

export const createNicoInstance = (session: string) => ({
  type: 'CREATE_NICO_INSTANCE',
  session
});

export const validateUserSession = () => ({
  type: 'VALIDATE_USER_SESSION'
});
