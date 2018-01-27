// @flow

import type { Common as State } from '../types/states/common';
import type { Common as Action } from '../types/actions/common';

const initialState = {
  user: {
    name: '',
    timeline: [],
    followers: '0', //TODO: check
    thumbnailUrl: ''
  },
  me: {
    timeline: [],
    following: []
  }
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.userData
        }
      };
    case 'FETCH_USER_TIMELINE_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          timeline: action.payload
        }
      };
    case 'FETCH_MY_TIMELINE_SUCCESS':
      return {
        ...state,
        me: {
          ...state.me,
          timeline: action.payload.data
        }
      };
    case 'FETCH_MY_FOLLOWING_SUCCESS':
      return {
        ...state,
        me: {
          ...state.me,
          following: action.payload
        }
      };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
