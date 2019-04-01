/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types';

const Link = ({
  active,
  children,
  onClick,
}) => {
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
        onClick();
      }
    }
    >
      {
      children
    }
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
