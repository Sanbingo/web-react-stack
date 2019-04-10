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
  QUERY_DATA,
} from './actionTypes';

export default combineReducers({
  ...CreateReducerSync(SEARCH_DATA, 'searchBoxData', {}),
  ...CreateReducer(QUERY_DATA, 'tableData', []),
});
