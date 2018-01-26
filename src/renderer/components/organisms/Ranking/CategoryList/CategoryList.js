// @flow

import React from 'react';
import cx from 'classnames';
import Select from 'react-select';
import { categoryList as categories, ranking } from 'nico-value';
import List from '../../../atoms/List';
import styles from './style.css';

import type { Props } from '../../../../containers/Ranking/CategoryList';

type State = {
  period: string;
  period: {
    value: string; // TODO: fix
    label: string; // TODO: fix
  };
  target: {
    value: string; // TODO: fix
    label: string; // TODO: fix
  };
};

const period = ranking.period.map((item) => ({
  value: item.key,
  label: item.title
}));

const target = ranking.target.map((item) => ({
  value: item.key,
  label: item.title
}));

class CategoryList extends React.PureComponent<Props, State> {
  categoryName: string; // TODO: fix

  constructor() {
    super();

    this.state = {
      period : period[1],
      target : target[0]
    };

    this.categoryName = 'all';
  }

  componentWillReceiveProps(props: Props, nextProps: Props) {
    if (!props.category.includes(this.categoryName)) {
      this.props.fetchCategory(
        props.category.split('/ranking/')[1],
        this.state.target.value,
        this.state.period.value
      );
    }
  }

  changePath = (path: string) => {
    // this.props.changeCategory(path, this.state.target.value, this.state.period.value); // TODO: bug

    this.props.changeCategory(path); // TODO: bug
  }

  changeTarget = (target: {
    label: string;
    value: string;
  }) => {
    this.setState({ target });

    this.props.fetchCategory(this.categoryName, target.value, this.state.period.value);
  }

  changePeriod = (period: {
    label: string;
    value: string;
  }) => {
    this.setState({ period });

    this.props.fetchCategory(this.categoryName, this.state.target.value, period.value);
  }

  componentDidMount() {
    this.props.fetchCategory(
      this.props.category.split('/ranking/')[1],
      this.state.target.value,
      this.state.period.value
    );
  }

  render() {
    const {
      category: categoryName
    } = this.props;

    this.categoryName = categoryName.split('/ranking/')[1];

    return (
      <div className={styles.container}>
        <div className={styles.condition}>
          <Select
            name="target"
            value={this.state.target}
            style={{
              border      : 0,
              borderRadius: 0
            }}
            options={target}
            onChange={this.changeTarget}
            searchable={false}
            placeholder="対象"
          />
          <Select
            name="period"
            value={this.state.period}
            style={{
              border      : 0,
              borderRadius: 0
            }}
            options={period}
            onChange={this.changePeriod}
            searchable={false}
            placeholder="期間"
          />
        </div>
        <div className={styles.categories}>
          {
            categories.map((category) => (
              <div
                style={{
                  height: 50,
                  overflow: 'hidden'
                }}
              >
                {
                  category.map((c, i) => {
                    if (i === 0) {
                      return (
                        <h5
                          onClick={() => this.changePath(c.key)}
                          className={cx(
                            styles.category,
                            c.key === this.categoryName ? styles.active : undefined
                          )}
                        >
                          {c.title}
                        </h5>
                      );
                    }
                    return (
                      <p
                        onClick={() => this.changePath(c.key)}
                        className={cx(
                          styles.category,
                          c.key === this.categoryName ? styles.active : undefined
                        )}
                      >
                        {c.title}
                      </p>
                    );
                  })
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CategoryList;
