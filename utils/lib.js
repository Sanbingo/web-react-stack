
const _ = require('lodash');
const ras = require('redux-actions');
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
  const requestType = `${type}_REQUEST`;
  const failureType = `${type}_FAILURE`;
  const successType = `${type}_SUCCESS`;
  return ({
    [reducer]: ras.handleActions({
      [requestType]: state => ({
        ...state,
        [_.camelCase(requestType.toLowerCase())]: true,
        [_.camelCase(failureType.toLowerCase())]: false,
      }),
      [failureType]: (state, action) => ({
        ...state,
        [_.camelCase(failureType.toLowerCase())]: true,
        [_.camelCase(requestType.toLowerCase())]: false,
        [_.camelCase(type.toLowerCase())]: action.payload,
      }),
      [successType]: (state, action) => ({
        ...state,
        [_.camelCase(requestType.toLowerCase())]: false,
        [_.camelCase(failureType.toLowerCase())]: false,
        [_.camelCase(type.toLowerCase())]: action.payload,
      }),
    },
    initState),
  });
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

module.exports = {
  CreateActionTyper,
  CreateReducer,
  CreateReducerSync,
  CreateActions,
  CreateAction: ras.createAction, // action 创建函数，by redux-actions
};
