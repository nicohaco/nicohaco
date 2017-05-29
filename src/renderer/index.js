// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers';

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <App />
    </AppContainer>),
  rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render();
  });
}
