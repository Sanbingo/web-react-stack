/* eslint-disable import/no-unresolved */
import {
  CreateAction,
} from '@Utils';

import { openModal, closeModal } from './modals/add-hotel-modal/actions';

import {
  SEARCH_DATA,
  SEARCH_BOX,
} from './actionTypes';

export const searchData = CreateAction(SEARCH_DATA);

export const searchBox = CreateAction(SEARCH_BOX);

export const openTestModal = id => openModal(id);
export const closeTestModal = () => closeModal();

export default {};
