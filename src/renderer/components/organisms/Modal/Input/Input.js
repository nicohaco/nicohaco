// @flow

import React from 'react';
import Button from '../../../atoms/Button';
import Modal from '../../../molecules/Modal';
import styles from './style.css';

type Props = {
  title: string;
  width: number;
  height: number;
  opened: boolean;
  onClick: (string) => void;
  closeModal: () => void;
  buttonLabel: string;
};

class Input extends React.PureComponent<Props, void> {
  input: ?HTMLInputElement;

  render() {
    const {
      title,
      width,
      height,
      opened,
      onClick,
      closeModal,
      buttonLabel
    } = this.props;

    return (
      <Modal
        title={title}
        width={width || 350}
        height={height || 200}
        opened={opened}
        closeModal={closeModal}
      >
        <input
          ref={(input) => this.input = input}
          type="text"
          className={styles.input}
        />
        <Button
          onClick={() => {
            if (this.input != null && this.input.value !== '') {
              onClick(this.input.value);
            }
          }}
          className={styles.button}
        >
          {
            buttonLabel
          }
        </Button>
      </Modal>
    );
  }
}

export default Input;
