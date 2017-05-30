// @flow

import React from 'react';
import { Icon as Button } from '../../atoms/Button';
import styles from './style.css';

type Props = {
  loop: 'none' | 'one' | 'all';
  onClick: () => {};
  className: string;
};

const decideLoopPositon = (p) => {
  const loopTable = ['none', 'all', 'one'];
  const next = loopTable.findIndex((item) => item === p);

  return loopTable[next + 1] !== undefined ?
    loopTable[next + 1] :
    loopTable[0];
};

const LoopButton = (props: Props) => (
  <div className={props.className}>
    <div className={styles.container}>
      {
        props.loop !== 'none' ? (
          <div className={styles.bg}>
            {
              props.loop === 'one' ? (
                <span className={styles.oneLabel}>1</span>
              ) : null
            }
          </div>
        ) : null
      }
      <Button
        icon="loop"
        size="1.2rem"
        title="loop"
        className={styles.button}
        onClick={() => props.onClick(decideLoopPositon(props.loop))}
      />
    </div>
  </div>
);

export default LoopButton;
