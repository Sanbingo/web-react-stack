/* eslint-disable import/no-unresolved */
import {
  combineReducers,
} from 'redux';
import {
  CreateReducer,
} from '@Utils';
import {
  QUERY_DATA,
} from './actionTypes';

export default combineReducers({
  ...CreateReducer(QUERY_DATA, 'queryData', { count: 3 }),
});
