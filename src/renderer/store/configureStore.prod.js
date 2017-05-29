import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import createHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import mySaga from '../sagas';

export const history = createHistory();

const saga = createSaga();

const middlewares: Array<Function> = [saga];

const enhancer = compose(applyMiddleware(
  ...middlewares,
  routerMiddleware(history)
));

const configureStore = (initialState?: AllStates) => {
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  return store;
};

export default configureStore;
