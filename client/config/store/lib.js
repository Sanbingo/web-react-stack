/* eslint-disable func-names */
import {
  combineReducers,
} from 'redux';
import {
  camelCase,
} from 'lodash';
import {
  fork,
  all,
} from 'redux-saga/effects';

// 创建rootSaga
export const createRootSaga = (contextSaga) => {
  const rootSaga = function* () {
    const combineSaga = contextSaga.keys().map(item => fork(contextSaga(item).default));
    yield all(combineSaga);
  };
  return ({
    rootSaga,
  });
};
// 创建rootReducer
export const createRootReducer = (contextReducer) => {
  const reducerObj = {};
  contextReducer.keys().forEach((item) => {
    reducerObj[camelCase(item.replace(/\.js/g, '').replace(/\./g, ''))] = contextReducer(item).default;
  });
  const rootReducer = combineReducers(reducerObj);

  return ({
    rootReducer,
  });
};
