// @flow

/* eslint-disable flowtype/no-weak-types */

export type UserData = {
  id: number;
  name: string;
  session: string;
  description: string;
  thumbnailUrl: string;
};

export type Auth = {
  userData: UserData;
  nicoInstance: null | Object; // [TODO] create type file on nico-api
};
