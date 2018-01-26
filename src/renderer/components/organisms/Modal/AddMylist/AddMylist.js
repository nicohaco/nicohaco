// @flow

import React from 'react';
import List from '../../../atoms/List';
import Modal from '../../../molecules/Modal';
import { formatDate } from '../../../../utils/format';

import type { Props } from '../../../../containers/Modal/AddMylist';

class AddMylist extends React.PureComponent<Props, void> {
  componentWillReceiveProps(nextProps: Props) {
    if (!this.props.opened && nextProps.opened) {

      // Here is not synchronous. But ok.
      this.props.launch();
    }
  }

  render() {
    const {
      add,
      video,
      opened,
      closeModal,
      mylistgroup
    } = this.props;

    return (
      <Modal
        title="マイリストを選択する"
        width={400}
        height={300}
        opened={opened}
        closeModal={closeModal}
      >
        {
          <List
            items={mylistgroup.map((item) => ({
              key    : item.id,
              title  : item.name,
              message: `最終更新日: ${formatDate(item.updateTime * 1000)}`,
              onClick: () => add(item.id, video.videoId)
            }))}
          />
        }
      </Modal>
    );
  }
}

export default AddMylist;
