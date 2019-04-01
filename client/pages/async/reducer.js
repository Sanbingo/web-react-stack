/* eslint-disable import/no-unresolved */
import {
  combineReducers,
} from 'redux';
import {
  CreateReducerSync,
} from '@Utils';
import {
  SEARCH_DATA,
} from './actionTypes';

export default combineReducers({
  ...CreateReducerSync(SEARCH_DATA, 'searchBoxData', {}),
});
