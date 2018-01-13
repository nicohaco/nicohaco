// @flow

import React from 'react';
import List from '../../../atoms/List';
import styles from './style.css';

type Props = {
  selectCategory: (string) => {};
};

const categories = [
  { title: 'カテゴリ合算' },

  { title: 'エンタメ・音楽' },
  { title: 'VOCALOID' },
  { title: '歌ってみた' },
  { title: 'ラジオ' },
  { title: '東方' },
  { title: 'ニコニコインディーズ' },

  { title: '生活・一般・スポ' },
  { title: '動物' },
  { title: '料理' },
  { title: '自然' },
  { title: '旅行' },
  { title: 'スポーツ' },
  { title: 'ニコニコ動画講座' },
  { title: '車載動画' },
  { title: '歴史' },

  { title: '政治' },

  { title: '科学・技術' },
  { title: '科学' },
  { title: 'ニコニコ技術部' },
  { title: 'ニコニコ手芸部' },
  { title: '作ってみた' },

  { title: 'アニメ・ゲーム・絵' },
  { title: 'アニメ' },
  { title: 'ゲーム' },
  { title: '実況プレイ動画' },
  { title: '東方' },
  { title: 'アイドルマスター' },
  { title: 'ラジオ' },
  { title: '描いてみた' },

  { title: 'その他' },
  { title: '例のアレ' },
  { title: '日記' }
];

const CategoryList = (props: Props) => (
  <div className={styles.container}>
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
