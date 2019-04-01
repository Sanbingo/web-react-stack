/* eslint-disable import/no-unresolved */
import {
  CreateAction,
} from '@Utils';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_FORM,
  SUBMIT_DATA,
} from './actionTypes';

export const openModal = CreateAction(OPEN_MODAL);
export const closeModal = CreateAction(CLOSE_MODAL);
export const changeForm = CreateAction(CHANGE_FORM);
export const submitData = CreateAction(SUBMIT_DATA);

export default {};
