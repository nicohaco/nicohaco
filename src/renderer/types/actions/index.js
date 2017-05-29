// @flow

import type { Auth } from './auth';
import type { Page } from './page';
import type { Common } from './common';
import type { Player } from './player';
import type { Search } from './search';
import type { Mylist } from './mylist';

export type Action =
  Auth |
  Page |
  Common |
  Player |
  Search |
  Mylist;
