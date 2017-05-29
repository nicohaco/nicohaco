// @flow

import React from 'react';
import Modal from 'react-modal';
import styles from './style.css';

type Props = {
  width: number;
  height: number;
  opened: boolean;
  children: React.Component<*>;
  closeModal: () => {};
};

const ModalComponent = (props: Props) => (
  <Modal
    isOpen={props.opened}
    className={styles.container}
    overlayClassName={styles.overlay}
    contentLabel="modal"
    onRequestClose={props.closeModal}
    shouldCloseOnOverlayClick
  >
    {
      props.children
    }
  </Modal>
);

export default ModalComponent;
