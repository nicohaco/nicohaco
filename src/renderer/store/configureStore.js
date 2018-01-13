// @flow

import configureStoreDev, { history as historyDev } from './configureStore.dev';
import configureStoreProd, { history as historyProd } from './configureStore.prod';

export const history = process.env.NODE_ENV === 'production' ?
  historyProd :
  historyDev;
export default process.env.NODE_ENV === 'production' ?
  configureStoreProd :
  configureStoreDev;
