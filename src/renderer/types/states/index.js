// @flow

import type { Auth } from './auth';
import type { Users } from './users';
import type { Common } from './common';
import type { Mylist } from './mylist';
import type { Player } from './player';
import type { Search } from './search';
import type { Ranking } from './ranking';

export type State = {
  auth: Auth;
  users: Users;
  common: Common;
  mylist: Mylist;
  player: Player;
  search: Search;
  router: {
    location: {
      pathname: string;
    };
  };
  ranking: Ranking;
};
