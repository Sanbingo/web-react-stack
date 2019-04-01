/* eslint-disable import/no-unresolved */
import {
  CreateAction,
  CreateActions,
} from '@Utils';
import axios from 'axios';
import {
  QUERY_DATA,
  SEARCH_DATA,
} from './actionTypes';

// eslint-disable-next-line no-unused-vars
const AsyncCreateAction = type => payload => (dispatch) => {
  const {
    request,
    failure,
    success,
  } = CreateActions(type);
  dispatch(request(payload));
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      dispatch(success(response));
    })
    .catch((err) => {
      dispatch(failure(err));
    });
};
export const queryData = CreateAction(QUERY_DATA);

export const searchData = CreateAction(SEARCH_DATA);
// export const queryData = AsyncCreateAction(QUERY_DATA)
