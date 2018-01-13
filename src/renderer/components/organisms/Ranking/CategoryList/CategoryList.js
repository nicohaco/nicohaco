// @flow

import React from 'react';
import Select from 'react-select'
import { categoryList as categories, ranking } from 'nico-value';
import List from '../../../atoms/List';
import styles from './style.css';

type Props = {
  selectCategory: (string) => {};
};

const period = ranking.period.map((item) => ({
  value: item.key,
  label: item.title
}));

const target = ranking.target.map((item) => ({
  value: item.key,
  label: item.title
}));

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      period: period[1],
      target: target[0],
      current: 'all'
    };
  }

  changePath = (path) => {
    this.setState({ current: path });

    this.props.selectCategory(
      path, this.state.target.value, this.state.period.value
    );
  }

  changeTarget = (target) => {
    this.setState({ target });

    this.props.selectCategory(
      this.state.current, target.value, this.state.period.value
    );
  }

  changePeriod = (period) => {
    this.setState({ period });

    this.props.selectCategory(
      this.state.current, this.state.target.value, period.value
    );
  }

  componentWillMount() {
    this.props.selectCategory(
      this.state.current, this.state.target.value, this.state.period.value
    );
  }

  render() {
    const {
      selectCategory
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.condition}>
          <Select
            name="target"
            value={this.state.target}
            options={target}
            onChange={this.changeTarget}
            searchable={false}
          />
          <Select
            name="period"
            value={this.state.period}
            options={period}
            onChange={this.changePeriod}
            searchable={false}
          />
        </div>
        <List
          items={categories.flatten().map((item, i) => ({
            key    : `${i}_${item.title}`,
            active: item.key === this.state.current,
            title  : item.title,
            onClick: () => this.changePath(item.key)
          }))}
        />
      </div>
    );
  }
}

export default CategoryList;
