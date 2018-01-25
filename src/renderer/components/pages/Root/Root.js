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
    ipcRenderer.on('deleteDB', () => {
      this.props.deleteDB();
    });

    ipcRenderer.on('subWindow', (event, opened) => {
      this.props.updateSubWindowStatus(opened);
    });
  }

  render() {
    return (
      <div />
    );
  }
}

export default Root;
