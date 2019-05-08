/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  shallow,
} from 'enzyme';
import UniqueComponent from './unique';

it('test UniqueComponent', () => {
  const wrapper = shallow(<UniqueComponent />);
  expect(wrapper.contains(<div className="unique" />)).toBe(true);
});
