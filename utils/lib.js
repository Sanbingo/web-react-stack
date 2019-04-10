/* eslint-disable func-names */

const _ = require('lodash');
const ras = require('redux-actions');
const {
  put,
  takeLatest,
} = require('redux-saga/effects');
const axios = require('axios');

/*
 * actionType 创建函数（ 自定义）
 */
const CreateActionTyper = namespace => new Proxy({}, {
  get(target, key) {
    const prefix = _.isString(namespace) ? namespace : _.toString(namespace);
    const underline = prefix ? '_' : '';
    return `${prefix.toUpperCase()}${underline}${key.toUpperCase()}`;
  },
});
/*
 * action 创建函数（自定义）
 * 默认创建request / failure / success三个映射actions
 */
const CreateActions = (type) => {
  const requestType = `${type}_REQUEST`;
  const failureType = `${type}_FAILURE`;
  const successType = `${type}_SUCCESS`;
  return ({
    request: payload => ({
      type: requestType,
      payload,
    }),
    failure: payload => ({
      type: failureType,
      payload,
    }),
    success: payload => ({
      type: successType,
      payload,
    }),
  });
};

/*
 * reducer 创建函数（ 自定义）
 */
const CreateReducer = (type, reducer, initState) => {
  // actions type
  const requestType = `${type}_REQUEST`;
  const failureType = `${type}_FAILURE`;
  const successType = `${type}_SUCCESS`;

  // 设置请求发起和失败的变量名，eg: queryDataLoading 、queryDataFailure
  const reducerLoading = `${reducer}Loading`;
  const reducerFailure = `${reducer}Failure`;

  /*
  * 新：平铺请求变量并初始化

  请求前Store:
  queryData: {}
  queryDataFailure: false
  queryDataLoading: false

  请求后Store:
  queryData: [{...}, {...}]
  queryDataFailure: false
  queryDataLoading: false
  */
  return ({
    [reducer]: ras.handleActions({
      [successType]: (state, action) => action.payload && action.payload.data,
    },
    initState),
    [reducerLoading]: ras.handleActions({
      [requestType]: () => true,
      [successType]: () => false,
      [failureType]: () => false,
    }, false),
    [reducerFailure]: ras.handleActions({
      [requestType]: () => false,
      [successType]: () => false,
      [failureType]: () => true,
    }, false),
  });
  /*
   * 旧： 无法初始化请求变量，在请求时才会产生store，并且是嵌套的，例如
  请求前Store:
    queryData: {}

  请求后Store:
    queryData: {
      queryData: [{...}, {...}]
      queryDataFailure: false
      queryDataLoading: false
    }
  */
  // return ({
  //   [reducer]: ras.handleActions({
  //     [requestType]: state => ({
  //       ...state,
  //       [_.camelCase(loading.toLowerCase())]: true,
  //       [_.camelCase(failure.toLowerCase())]: false,
  //     }),
  //     [failureType]: (state, action) => ({
  //       ...state,
  //       [_.camelCase(failure.toLowerCase())]: true,
  //       [_.camelCase(loading.toLowerCase())]: false,
  //       [_.camelCase(reducer.toLowerCase())]: action.payload,
  //     }),
  //     [successType]: (state, action) => ({
  //       ...state,
  //       [_.camelCase(loading.toLowerCase())]: false,
  //       [_.camelCase(failure.toLowerCase())]: false,
  //       [_.camelCase(reducer.toLowerCase())]: action.payload && action.payload.data, // 返回data数据
  //     }),
  //   },
  //   initState),
  // });
};

const CreateReducerSync = (type, reducer, initState) => ({
  [reducer]: ras.handleActions({
    [type]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initState),
});


/*
* 封装saga方法
* @type: actionType
* @callback: generator函数
* 作用: 使用takeLatest方法封装发起请求， 请求成功和请求失败三个操作， 默认使用get方式
* Todo: 请求方法暂时默认get方式，考虑如何对接API Restful用法，考虑node的代理转发功能
*/
const takeLoadSaga = function* (type, callback) {
  const loadSaga = function* (url, pd) {
    const {
      request,
      failure,
      success,
    } = CreateActions(type);
    yield put(request(pd));
    try {
      // todo: get or post方法
      const r = yield axios.get(url);
      yield put(success(r.data));
      return r.data;
    } catch (error) {
      yield put(failure(error));
      return error;
    }
  };
  yield takeLatest(type, function* ({ payload }) {
    return yield callback(loadSaga, payload);
  });
};

module.exports = {
  CreateActionTyper,
  CreateReducer,
  CreateReducerSync,
  CreateActions,
  CreateAction: ras.createAction, // action 创建函数，by redux-actions,
  takeLoadSaga,
};
