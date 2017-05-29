// @flow

import React from 'react';
import MainContainer from '../../templates/MainContainer';
import GroupList from '../../../containers/Mylist/GroupList';
import GridList from '../../../containers/Mylist/GridList';

type Props = {
  setup: () => {};
};

class Mylist extends React.Component<void, Props, void> {
  componentWillMount() {
    this.props.setup();
  }

  render() {
    return (
      <MainContainer
        left={<GroupList />}
        right={<GridList />}
      />
    );
  }
}

export default Mylist;
