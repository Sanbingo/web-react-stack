/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FilterLink from '../containers/filterLink';

const Footer = () => (
  <p>
Show:
    <FilterLink filter="SHOW_ALL"> All </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
  </p>
);

export default Footer;
