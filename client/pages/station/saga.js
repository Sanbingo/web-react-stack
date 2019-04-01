/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  CreateActions,
} from '@Utils';
import {
  QUERY_DATA,
} from './actionTypes';

// eslint-disable-next-line generator-star-spacing
function* mySaga() {
  yield takeLatest(QUERY_DATA, function* (payload) {
    const {
      request,
      failure,
      success,
    } = CreateActions(QUERY_DATA);
    yield put(request(payload));
    try {
      const r = yield axios.get('https://jsonplaceholder.typicode.com/todos/1');
      yield put(success(r.data));
    } catch (error) {
      yield put(failure(error));
    }
  });
}
export default mySaga;
