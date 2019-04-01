/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  render() {
    const {
      filter,
      visibilityFilter,
      setVisibilityFilter,
      children,
    } = this.props;
    const active = filter === visibilityFilter;
    if (active) {
      return (
        <span>
          {' '}
          {
        children
      }
          {' '}

        </span>
      );
    }

    return (
      <a
        href=""
        onClick={
        (e) => {
          e.preventDefault();
          setVisibilityFilter(filter);
        }
      }
      >
        {' '}
        {
        children
      }
        {' '}

      </a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
