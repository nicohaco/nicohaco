// @flow

import React from 'react';

import {ipcRenderer} from 'electron';

type Props = {
  routePage: () => {};
};

class Root extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.routePage();

    // TODO: remove
    ipcRenderer.on('deleteDB', (event, arg) => {
      this.props.deleteDB();
    });
  }

  render() {
    return (
      <div />
    );
  }
}

export default Root;
