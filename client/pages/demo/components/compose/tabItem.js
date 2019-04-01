/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const TabItem = (props) => {
  const {
    active,
    onClick,
    children,
  } = props;
  const tabStyle = {
    'max-width': '150px',
    color: active ? 'red' : 'green',
    border: active ? '1px red solid' : '0px',
    padding: '0px 10px',
  };
  return (
    <span style={tabStyle} onClick={onClick}>
      {children}
    </span>
  );
};

export default TabItem;
