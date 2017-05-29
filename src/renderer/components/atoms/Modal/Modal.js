// @flow

import React from 'react';
import cx from 'classnames';
import Modal from 'react-modal';
import styles from './style.css';

type Props = {
  width: number;
  height: number;
  opened: boolean;
  children: React.Component<*>;
  className: string;
  closeModal: () => {};
};

const ModalComponent = (props: Props) => (
  <Modal
    isOpen={props.opened}
    style={{
      content: {
        width     : props.width,
        height    : props.height,
        background: props.background || '#fff'
      }
    }}
    contentLabel="modal"
    className={cx(styles.container, props.className)}
    onRequestClose={props.closeModal}
    overlayClassName={styles.overlay}
    shouldCloseOnOverlayClick
  >
    {
      props.children
    }
  </Modal>
);

export default ModalComponent;
