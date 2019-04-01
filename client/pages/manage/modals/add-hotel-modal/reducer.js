/* eslint-disable import/no-unresolved */
import {
  combineReducers,
} from 'redux';
import {
  CreateReducerSync,
} from '@Utils';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_FORM,
} from './actionTypes';


// 新加一个 reducer 来处理多块数据交叉的“ 复杂” 场景，当对话框关闭时重置formData对象。
function crossReducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL: {
      return ({
        ...state,
        visible: true,
        ...action.payload,
      });
    }
    case CLOSE_MODAL: {
      return ({
        visible: false,
      });
    }
    default:
      return ({
        ...state,
      });
  }
}


export default (state = { visible: false }, action) => {
  const combineReducer = combineReducers({
    ...CreateReducerSync(CHANGE_FORM, 'formData', {}),
  });

  const intermediateState = combineReducer(state, action);

  return crossReducer({
    ...state,
    ...intermediateState,
  }, action);
};
