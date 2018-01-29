// @flow

import type { Mylist as State } from '../types/states/mylist';
import type { Mylist as Action } from '../types/actions/mylist';

const initialState = {
  ready : false,
  group : [],
  mylist: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SHOW_MYLISTGROUP_SUCCESS':
    case 'FETCH_MYLISTGROUP_SUCCESS':
      return Object.assign({}, state, {
        group: action.payload.mylistgroup,
        ready: true
      });
    case 'UPDATE_MYLISTGROUP_SUCCESS':
      return Object.assign({}, state, {
        group: state.group.map((group) => {
          if (group.id === action.groupId) return { ...group, ...action.payload };
          else return group;
        })
      });
    case 'SHOW_MYLIST_SUCCESS':
    case 'FETCH_MYLIST_SUCCESS':
      return Object.assign({}, state, {
        mylist: action.payload.mylistitem,
        group : state.group.map((item) => {

          // eslint-disable-next-line  flowtype/no-weak-types
          const { payload } = (action: any); // fmmm....

          // update totalTime
          if (item && (item.id === payload.groupId)) {
            return Object.assign({}, item, {
              totalTime  : payload.totalTime,
              totalVideos: payload.totalVideos
            });
          }
          return item;
        })
      });
    case 'RESET':
      return initialState;
    case 'ADD_VIDEO':
    case 'SHOW_MYLIST':
    case 'LOAD_MYLIST':
    case 'REMOVE_VIDEO':
    case 'SETUP_MYLIST':
    case 'FETCH_MYLIST':
    case 'CREATE_MYLIST':
    case 'INSERT_MYLIST':
    case 'SHOW_MYLISTGROUP':
    case 'FETCH_MYLISTGROUP':
    case 'INSERT_MYLISTGROUP':
    case 'UPDATE_MYLISTGROUP':
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
