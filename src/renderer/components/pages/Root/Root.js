// @flow

import React from 'react';

type Props = {
  routePage: () => {};
};

class Root extends React.Component<void, Props, void> {
  componentWillMount() {
    this.props.routePage();
  }

  render() {
    return (
      <div />
    );
  }
}

export default Root;
