// @flow

import type { Users as State } from '../types/states/users';
import type { Users as Action } from '../types/actions/users';

const initialState = {
  user: {
    name        : '',
    videos      : [],
    mylists     : [],
    timeline    : [],
    followers   : '0',
    thumbnailUrl: ''
  },
  me: {
    history  : [],
    timeline : [],
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
    case 'FETCH_USER_VIDEOS_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          videos: action.payload
        }
      };
    case 'FETCH_USER_MYLISTS_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          mylists: action.payload
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
    case 'FETCH_MY_HISTORY_SUCCESS':
      return {
        ...state,
        me: {
          ...state.me,
          history: action.payload
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
      return state;
  }
};

export default reducer;
