// @flow

import React from 'react';
import cx from 'classnames';
import styles from './tile.style.css';

type ImgProps = {
  src: string;
};

type Props = {
  src: string[];
  size: number;
  isCircle: boolean;
  className: string;
};

const Img = (props: ImgProps) => {
  let el: {
    src: string;
  };

  return (
    <img
      src={props.src}
      ref={(img) => {
        if (img) el = img;
      }}
      width="100%"
      height="100%"
      onError={() => el.src = el.src.split('.M')[0]}
    />
  );
};

const Tile = (props: Props) => {
  if (!props.src) {
    return (
      <div
        style={{
          width          : props.size,
          height         : props.size,
          minWidth       : props.size,
          backgroundColor: '#fff'
        }}
      />
    );
  }

  return (
    <div
      style={{
        width          : props.size,
        height         : props.size,
        minWidth       : props.size,
        borderRadius   : props.isCircle ? '50%' : '0',
        backgroundColor: props.src[0] ? 'transparent' : '#3968db'
      }}
      className={cx(styles.container, props.className)}
    >
      <div
        style={{
          width  : props.size,
          height : props.src.length <= 2 ? props.size : props.size / 2,
          display: 'flex'
        }}
      >
        {
          props.src[0] ? (
            <div
              style={{
                width   : props.src.length === 1 ? props.size : props.size / 2,
                height  : props.src.length <= 2 ? props.size : props.size / 2,
                overflow: 'hidden'
              }}
            >
              <Img src={props.src[0]} />
            </div>
          ) : null
        }
        {
          props.src[1] ? (
            <div
              style={{
                width   : props.size / 2,
                height  : props.src.length <= 2 ? props.size : props.size / 2,
                overflow: 'hidden'
              }}
            >
              <Img src={props.src[1]} />
            </div>
          ) : null
        }
      </div>
      <div
        style={{
          width  : props.size,
          height : props.size / 2,
          display: 'flex'
        }}
      >
        {
          props.src[2] ? (
            <div
              style={{
                width   : props.src.length === 3 ? props.size : props.size / 2,
                height  : props.size / 2,
                overflow: 'hidden'
              }}
            >
              <Img src={props.src[2]} />
            </div>
          ) : null
        }
        {
          props.src[3] ? (
            <div
              style={{
                width   : props.size / 2,
                height  : props.size / 2,
                overflow: 'hidden'
              }}
            >
              <Img src={props.src[3]} />
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

export default Tile;
