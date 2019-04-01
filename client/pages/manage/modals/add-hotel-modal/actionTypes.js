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
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_FORM,
  SUBMIT_DATA,
} = CreateActionTyper(TITLE);

export default {};
