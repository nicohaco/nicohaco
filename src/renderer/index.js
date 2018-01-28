// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Analytics from 'electron-google-analytics';
import App from './containers';
import '!style-loader!css-loader!rc-slider/assets/index.css';
import '!style-loader!css-loader!react-select/dist/react-select.css';

const analytics = new Analytics('UA-113205184-1'); // TODO: wip
const rootEl = document.createElement('div');

if (document.body) document.body.appendChild(rootEl);

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
