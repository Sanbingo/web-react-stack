/* eslint-disable import/no-unresolved */
import {
  CreateAction,
} from '@Utils';

import {
  SEARCH_DATA,
  QUERY_DATA,
} from './actionTypes';

export const searchData = CreateAction(SEARCH_DATA);
export const queryData = CreateAction(QUERY_DATA);

export default {};
