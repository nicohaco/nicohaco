// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import SubWindow from './SubWindow';

const rootEl = document.createElement('div');

if (document.body) document.body.appendChild(rootEl);

ReactDOM.render(
  <SubWindow />,
  rootEl
);
