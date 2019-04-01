/* eslint-disable require-yield */
/* eslint-disable func-names */
import {
  takeLatest,
} from 'redux-saga/effects';
// eslint-disable-next-line import/no-unresolved
import {
  OPEN_MODAL,
  SUBMIT_DATA,
} from './actionTypes';
import {
  vgetState,
} from './m';

// eslint-disable-next-line generator-star-spacing
function* mySaga() {
  yield takeLatest(OPEN_MODAL, function* () {
    // console.log('search data...');
  });
  yield takeLatest(SUBMIT_DATA, function* (payload) {
    const formData = yield vgetState();
    // eslint-disable-next-line no-console
    console.log('formData', formData, payload.payload);
  });
}

export default mySaga;
