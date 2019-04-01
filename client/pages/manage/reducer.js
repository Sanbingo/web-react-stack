/* eslint-disable import/no-unresolved */
import {
  combineReducers,
} from 'redux';
import {
  CreateReducer,
  CreateReducerSync,
} from '@Utils';
import {
  SEARCH_DATA,
  SEARCH_BOX,
} from './actionTypes';

export default combineReducers({
  ...CreateReducer(SEARCH_DATA, 'searchData', { count: 3 }),
  ...CreateReducerSync(SEARCH_BOX, 'searchBoxData', {
    pageNow: 1,
    pageSize: 10,
  }),
});
