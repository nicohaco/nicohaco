// @flow

import type { Auth as State } from '../types/states/auth';
import type { Auth as Action } from '../types/actions/auth';

const initialState = {
  userData: {  // [TODO] create user.js when `user` relation becomes bloated...
    id          : -1,
    name        : '',
    session     : '',
    description : '',
    thumbnailUrl: ''
  },
  nicoInstance: null
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'INSERT_NICO_INSTANCE':
      return Object.assign({}, state, {
        nicoInstance: action.payload.nicoInstance
      });
    case 'FETCH_USER_DATA_SUCCESS': // rename
      return Object.assign({}, state, {
        userData: action.payload.userData
      });
    case 'RESET':
      return initialState;
    case 'LOGIN':
    case 'LOGOUT':
    case 'ROUTE_PAGE':
    case 'SHOW_USER_SESSION':
    case 'CREATE_NICO_INSTANCE':
    case 'VALIDATE_USER_SESSION':
    case 'VALIDATE_USER_SESSION_RESULT':
      return state;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
