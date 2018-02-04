/* eslint-disable max-len, no-unused-vars */

// @flow

// https://hackernoon.com/redux-flow-type-getting-the-maximum-benefit-from-the-fewest-key-strokes-5c006c54ec87

type _ExtractReturn<B, F: (...args: any[]) => B> = B;

export type ExtractReturn<F> = _ExtractReturn<*, F>;
