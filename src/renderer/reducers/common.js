// @flow

import type { Common as State } from '../types/states/common';
import type { Common as Action } from '../types/actions/common';

const initialState = {
  modal: {
    data  : {}, // fix needed data for each modal
    opened: false // don't set as global, [TODO] delete here
  },
  subWindow: {
    opened: false
  }
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        modal: {
          data  : action.data,
          opened: true
        }
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modal: {
          data  : {},
          opened: false
        }
      });
    case 'UPDATE_SUB_WINDOW_STATUS':
      return {
        ...state,
        subWindow: {
          opened: action.opened
        }
      };
    case 'RESET':
      return initialState;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
