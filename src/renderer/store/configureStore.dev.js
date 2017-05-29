import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import createHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import mySaga from '../sagas';

import type { State } from '../types/states';

export const history = createHistory();

const saga = createSaga();

const middlewares: Array<Function> = [saga];

const createEnhancer = () => {
  const reduxDevtoolsExtensionsCompose
    = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const appliedMiddlewares = applyMiddleware(
    ...middlewares,
      routerMiddleware(history)
  );

  if (reduxDevtoolsExtensionsCompose) {
    const devtoolsExtensionCompose = reduxDevtoolsExtensionsCompose({
      actionsBlacklist: ['UPDATE_ELAPSED_TIME']
    });

    return compose(devtoolsExtensionCompose(appliedMiddlewares));
  }
  else {
    return compose(appliedMiddlewares);
  }
};

const configureStore = (initialState?: State) => {
  const enhancer = createEnhancer();
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
