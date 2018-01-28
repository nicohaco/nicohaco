// @flow

import React from 'react';
import cx from 'classnames';
import MoreIcon from 'react-icons/lib/md/expand-more';
import styles from './style.css';

class ShowPageBox extends React.PureComponent {
  onClick = () => {
    this.setState({ expanded: true });
  };

  constructor() {
    super();

    this.state = { expanded: false };
  }

  render() {
    const {
      items,
      title,
      limitNum,
      className
    } = this.props;

    const items5 = !this.state.expanded ? items.slice().splice(0, limitNum) : items;

    return (
      <div className={cx(styles.container, className)}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.ul}>
          {
            items5
          }
        </ul>
        {
          items.length > limitNum && !this.state.expanded ? (
            <span
              onClick={this.onClick}
              className={styles.more}
            >
              Show More
              <MoreIcon />
            </span>
          ) : null
        }
      </div>
    );
  }
}

ShowPageBox.defaultProps = {
  limitNum: 5
};

export default ShowPageBox;
