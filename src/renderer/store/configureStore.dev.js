// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import createSaga from 'redux-saga';
import rootReducer from '../reducers';
import mySaga from '../sagas';

import type { State } from '../types/states';

export const history = createHistory();

const saga = createSaga();

const createEnhancer = () => {
  const appliedMiddlewares = applyMiddleware(
    saga,
    routerMiddleware(history)
  );

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: ['UPDATE_ELAPSED_TIME']
    }) : compose;

  return composeEnhancers(appliedMiddlewares);
};

const configureStore = (initialState?: State) => {
  const enhancer = createEnhancer();
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  return store;
};

export default configureStore;
