// @flow

type errorCode =
  'EXIST' |
  'NOAUTH' |
  'DELETED' |
  'ENOTFOUND' |
  'SERVER_ERROR' |
  'ACCESS_DENIED' |
  'LOGIN_FAILURES';

export type Error = {
  error: {
    code: errorCode;
    error?: {
      code: errorCode;
    };
  };
};
