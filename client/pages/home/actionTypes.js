/* eslint-disable import/no-unresolved */
/*
 * action 类型
 */
import {
  CreateActionTyper,
} from '@Utils';
import { TITLE } from './consts';

// 旧的方式
// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// 新的方式
export const {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} = CreateActionTyper(TITLE);
