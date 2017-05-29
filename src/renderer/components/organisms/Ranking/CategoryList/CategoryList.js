// @flow

import React from 'react';
import List from '../../../atoms/List';

type Props = {
  selectCategory: (string) => {};
};

const categories = [
  {
    title: 'エンタメ・音楽'
  },
  {
    title: 'VOCALOID'
  },
  {
    title: '歌ってみた'
  },
  {
    title: 'ラジオ'
  },
  {
    title: '東方'
  },
  {
    title: 'ニコニコインディーズ'
  }
];

const CategoryList = (props: Props) => (
  <div>
    <List
      items={categories.map((item) => ({
        key    : item.title,
        title  : item.title,
        onClick: () => props.selectCategory(item.title)
      }))}
    />
  </div>
);

export default CategoryList;
