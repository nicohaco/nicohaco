// @flow

import configureStoreDev, { history as historyDev } from './configureStore.dev';
import configureStoreProd, { history as historyProd } from './configureStore.prod';

let his; // [TODO] fix
let configureStore;

if (process.env.NODE_ENV !== 'production') {
  his = historyDev;
  configureStore = configureStoreDev;
}
else {
  his = historyProd;
  configureStore = configureStoreProd;
}

export default configureStore;
export const history = his;
