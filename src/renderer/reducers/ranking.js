// @flow

import type { Ranking as State } from '../types/states/ranking';
import type { Ranking as Action } from '../types/actions/ranking';

const initialState = {
  result: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_RANKING_SUCCESS':
      return Object.assign({}, state, {
        result: action.payload.ranking
      });
    case 'RESET':
      return initialState;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
