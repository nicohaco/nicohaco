// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';
import styles from './style.css';

type Props = {
  items: {
    key: string;
    title: string;
    message: string;
    onClick: () => {};
    textAlign: 'center' | 'left' | 'right';
  }[];
};

const List = (props: Props) => (
  <ul className={photon['list-group']}>
    {
      props.items.map((item) => (
        <li
          key={item.key}
          style={{
            textAlign: item.textAlign ? item.textAlign : 'left'
          }}
          onClick={item.onClick}
          className={cx(
            photon['list-group-item'], styles.li, item.active ? styles.active : undefined
          )}
        >
          <strong>{item.title}</strong>
          <p>{item.message}</p>
        </li>
      ))
    }
  </ul>
);

export default List;
