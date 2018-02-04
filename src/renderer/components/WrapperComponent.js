// @flow

import React from 'react';

const WrapperComponent = (ComposedComponent) => class extends React.Component {
  componentWillMount() {
    this.props.setup(this.props.id);
  }

  render() {
    return <ComposedComponent {...this.props} />
  }
};

export default WrapperComponent;
