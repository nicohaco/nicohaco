import React from 'react';
import ShowPageBox from '../../../molecules/ShowPageBox';
import MylistItem from '../../../molecules/MylistItem';
import styles from './style.css';

class Mylists extends React.Component {
  componentWillMount() {
    this.props.fetchUserMylists(this.props.id);
  }

  render() {
    const {
      mylists
    } = this.props;

    return (
      <ShowPageBox
        title="Mylists"
        limitNum={10}
        items={mylists.map((mylist) => (
          <MylistItem
            num={mylist.num}
            title={mylist.title}
          />
        ))
        }
      />
    );
  }
}

export default Mylists;
