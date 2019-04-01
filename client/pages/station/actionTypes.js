/* eslint-disable import/no-unresolved */
/*
 * action 类型
 */
import {
  CreateActionTyper,
} from '@Utils';
import {
  TITLE,
} from './consts';

export const {
  QUERY_DATA,
  SEARCH_DATA,
} = CreateActionTyper(TITLE);
