// @flow

import React from 'react';
import cx from 'classnames';
import DetailIcon from 'react-icons/lib/md/expand-more';
import ExpandLessIcon from 'react-icons/lib/md/expand-less';
import Select from 'react-select';
import { categoryList as categories, ranking } from 'nico-value';
import styles from './style.css';

import type { Props } from '../../../../containers/Ranking/CategoryList';

type State = {
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

  changePath = (path: string) => {
    this.props.changeCategory(path);
  };

  changeTarget = (target: {
    label: string;
    value: string;
  }) => {
    this.setState({ target });

    this.props.fetchCategory(this.categoryName, target.value, this.state.period.value);
  };

  changePeriod = (period: {
    label: string;
    value: string;
  }) => {
    this.setState({ period });

    this.props.fetchCategory(this.categoryName, this.state.target.value, period.value);
  };

  expandCategory = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  constructor() {
    super();

    this.state = {
      period  : period[1],
      target  : target[0],
      expanded: false
    };

    this.categoryName = 'all';
  }

  componentDidMount() {
    this.props.fetchCategory(
      this.props.category.split('/ranking/')[1],
      this.state.target.value,
      this.state.period.value
    );
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!nextProps.category.includes(this.categoryName)) {
      this.props.fetchCategory(
        nextProps.category.split('/ranking/')[1],
        this.state.target.value,
        this.state.period.value
      );
    }
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
          {
            this.state.expanded ? (
              <ExpandLessIcon
                onClick={this.expandCategory}
                className={styles.detail}
              />
            ) : (
              <DetailIcon
                onClick={this.expandCategory}
                className={styles.detail}
              />
            )
          }
        </div>
        <div className={styles.categories}>
          {
            categories.map((category) => (
              <div
                style={{
                  height  : this.state.expanded ? 'auto' : 50,
                  overflow: this.state.expanded ? 'none' : 'hidden'
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
                          styles.categoryDetail,
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
