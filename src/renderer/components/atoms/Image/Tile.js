// @flow

import React from 'react';

type Props = {
  src: Array<string>;
  size: number;
  isCircle: boolean;
};


const Img = (props) => (
  <img
    src={props.src}
    width={props.width}
    height={props.height}
  />
);

const Tile = (props: Props) => {
  if (!props.src) {
    return (
      <div
        style={{
          width          : props.size,
          height         : props.size,
          minWidth       : props.size,
          borderRadius   : '50%',
          backgroundColor: '#3968db'
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
        borderRadius   : '50%',
        backgroundColor: props.src[0] ? 'transparent' : '#3968db'
      }}
    >
      <div
        style={{
          width : props.size,
          height: props.src.length <= 2 ? props.size : props.size / 2
        }}
      >
        {
          props.src[0] ? (
            <Img
              src={props.src[0]}
              width={props.src.length === 1 ? props.size : props.size / 2}
              height={props.src.length <= 2 ? props.size : props.size / 2}
            />
          ) : null
        }
        {
          props.src[1] ? (
            <Img
              src={props.src[1]}
              width={props.size}
              height={props.src.length <= 2 ? props.size : props.size / 2}
            />
          ) : null
        }
      </div>
      <div
        style={{
          width : props.size,
          height: props.size / 2
        }}
      >
        {
          props.src[2] ? (
            <Img
              src={props.src[2]}
              width={props.src.length === 3 ? props.size : props.size / 2}
              height={props.size / 2}
            />
          ) : null
        }
        {
          props.src[3] ? (
            <Img
              src={props.src[3]}
              width={props.size / 2}
              height={props.size / 2}
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default Tile;
