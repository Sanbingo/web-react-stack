/* eslint-disable import/no-unresolved */
import {
  camelCase,
} from 'lodash';
import store from '@Config/store';
import Component from './container';
import { TITLE } from './consts';

export { TITLE, ROUTE } from './consts';

export const REDUCER_PATH = `${camelCase(TITLE)}Reducer`;
// eslint-disable-next-line func-names
// eslint-disable-next-line require-yield
export const vgetState = function* (name) {
  if (name) {
    return store.getState()[REDUCER_PATH][name];
  }
  return store.getState()[REDUCER_PATH];
};
export default Component;
