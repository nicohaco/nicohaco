// @flow

import type { Common as State } from '../types/states/common';
import type { Common as Action } from '../types/actions/common';

const initialState = {
  timeline: [],
  following: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_MY_TIMELINE_SUCCESS':
      return {
        ...state,
        timeline: action.payload.data
      };
    case 'FETCH_MY_FOLLOWING_SUCCESS':
      return {
        ...state,
        following: action.payload
      };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
