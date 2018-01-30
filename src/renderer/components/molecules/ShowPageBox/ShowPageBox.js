// @flow

import React from 'react';
import cx from 'classnames';
import MoreIcon from 'react-icons/lib/md/expand-more';
import styles from './style.css';

type State = {
  expanded: boolean;
};

type Props = {
  items: Object[]; // TODO: fix
  title: string;
  limitNum: number;
  className: string;
  ulClassName: string;
};

class ShowPageBox extends React.PureComponent<Props, State> {
  state: State;

  static defaultProps = {
    limitNum: 5
  };

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
      className,
      ulClassName
    } = this.props;

    const items5 = !this.state.expanded ? items.slice().splice(0, limitNum) : items;

    return (
      <div className={cx(styles.container, className)}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={cx(styles.ul, ulClassName)}>
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

export default ShowPageBox;
