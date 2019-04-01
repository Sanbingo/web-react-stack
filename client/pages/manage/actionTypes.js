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
  SEARCH_DATA,
  SEARCH_BOX,
} = CreateActionTyper(TITLE);

export default {};
