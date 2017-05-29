// @flow

import React from 'react';
import photon from '../../../styles/photon';

type Props = {
  onEnter: () => {};
  onChange: () => {};
  placeholder: string;
};

class SearchBox extends React.Component<void, Props, void> {
  handleChange = (e: SyntheticInputEvent) => {
    if (e.key === 'Enter' && typeof this.props.onEnter === 'function') {
      this.props.onEnter(e.target.value);
    }
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      placeholder
    } = this.props;

    return (
      <input
        type="text"
        onKeyPress={this.handleChange}
        className={photon['form-control']}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
