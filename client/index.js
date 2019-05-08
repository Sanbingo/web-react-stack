/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Provider,
} from 'react-redux';
import store from './config/store';
import { App } from './config/route';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
