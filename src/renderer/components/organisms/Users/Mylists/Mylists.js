// @fow

import React from 'react';
import ShowPageBox from '../../../molecules/ShowPageBox';
import MylistItem from '../../../molecules/MylistItem';

const Mylists = (props) => (
  <ShowPageBox
    title="Mylists"
    limitNum={10}
    items={
      props.mylists.map((mylist) => (
        <MylistItem
          num={mylist.num}
          title={mylist.title}
          onClick={() => props.goToMylist(mylist.id, props.id)}
        />
      ))
    }
  />
);

export default Mylists;
