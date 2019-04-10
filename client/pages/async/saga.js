/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-yield */
/* eslint-disable func-names */
// import {
//   put,
//   takeLatest,
// } from 'redux-saga/effects';
// import axios from 'axios';
import {
  // CreateActions,
  takeLoadSaga,
} from '@Utils';
import {
  QUERY_DATA,
} from './actionTypes';
import {
  vgetState,
} from './config';

// eslint-disable-next-line generator-star-spacing
function* mySaga() {
  // 新：封装请求方法，隐藏发起请求，请求成功和请求失败的通用过程。
  yield takeLoadSaga(QUERY_DATA, function* (loadSaga, payload) {
    const store = yield vgetState();
    // console.log('store: ', store);
    const result = yield loadSaga('/api/getUserList', payload);
    // console.log('result: ', result);
  });

  // 旧：每次手动发起三个请求。
  // yield takeLatest(QUERY_DATA, function* (payload) {
  //   const {
  //     request,
  //     failure,
  //     success,
  //   } = CreateActions(QUERY_DATA);
  //   yield put(request(payload));
  //   try {
  //     const r = yield axios.get('/api');
  //     yield put(success(r.data));
  //   } catch (error) {
  //     yield put(failure(error));
  //   }
  // });
}
export default mySaga;
