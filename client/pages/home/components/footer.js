/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import FilterLink from './link' // eslint-disable-line

export default class Footer extends React.Component {
  render() {
    return (
      <p>
        {' '}
Show:
        <FilterLink {...this.props} filter="SHOW_ALL"> All </FilterLink>
        {' '}
        {
          ', '
        }
        {' '}
        <FilterLink {...this.props} filter="SHOW_ACTIVE"> Active </FilterLink>
        {' '}
        {
          ', '
        }
        {' '}
        <FilterLink {...this.props} filter="SHOW_COMPLETED"> Completed </FilterLink>
        {' '}

      </p>
    );
  }
}
