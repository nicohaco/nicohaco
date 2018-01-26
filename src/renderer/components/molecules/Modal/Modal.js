// @flow

import React from 'react';
import Modal from '../../atoms/Modal';
import styles from './style.css';

type Props = {
  title: string;
  width: number;
  height: number;
  opened: boolean;
  children: React$Node;
  closeModal: () => void;
};

const ModalComponent = (props: Props) => (
  <Modal
    opened={props.opened}
    width={props.width}
    height={props.height}
    closeModal={props.closeModal}
  >
    <header className={styles.header}>
      <span>{props.title}</span>
    </header>
    <div className={styles.body}>
      {
        props.children
      }
    </div>
  </Modal>
);

export default ModalComponent;
