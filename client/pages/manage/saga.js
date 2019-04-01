/* eslint-disable require-yield */
/* eslint-disable func-names */
import {
  takeLatest,
} from 'redux-saga/effects';
import {
  SEARCH_DATA,
} from './actionTypes';

// eslint-disable-next-line generator-star-spacing
function* mySaga() {
  yield takeLatest(SEARCH_DATA, function* () {
    // console.log('search data...');
  });
}
export default mySaga;
