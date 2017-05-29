// @flow

import React from 'react';
import List from '../../../atoms/List';
import Modal from '../../../molecules/Modal';
import { formatDate } from '../../../../utils/format';

import type { GroupArray } from '../../../../types/states/mylist';

type Props = {
  add: (string, ?string) => {};
  video: {
    videoId?: string;
    contentId?: string;
  };
  opened: boolean;
  launch: () => {};
  closeModal: () => {};
  mylistgroup: GroupArray;
};

class AddMylist extends React.Component<void, Props, void> {
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
              onClick: () => add(item.id, video.videoId || video.contentId)
            }))}
          />
        }
      </Modal>
    );
  }
}

export default AddMylist;
