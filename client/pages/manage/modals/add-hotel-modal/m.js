/* eslint-disable func-names */
import { camelCase } from 'lodash';
// eslint-disable-next-line import/no-unresolved
import store from '@Config/store';
import Component from './container';
import { TITLE } from './consts';

export const REDUCER_PATH = `${camelCase(TITLE)}Reducer`;
// eslint-disable-next-line func-names
// eslint-disable-next-line require-yield
export const vgetState = function* (name) {
  if (name) {
    return store.getState()[REDUCER_PATH][name];
  }
  return store.getState()[REDUCER_PATH];
};
export const TITLE_NAME = TITLE;

export default Component;
