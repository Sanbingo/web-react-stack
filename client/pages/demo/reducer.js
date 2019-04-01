/* eslint-disable import/no-unresolved */
import {
  combineReducers,
} from 'redux';
import {
  CreateReducer,
} from '@Utils';
import {
  SEARCH_DATA,
} from './actionTypes';

export default combineReducers({
  ...CreateReducer(SEARCH_DATA, 'searchData', { count: 3 }),
});
