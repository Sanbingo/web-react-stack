import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // console.log('Error', error);
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // console.log(error, info);
    return {
      error,
      info,
    };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line react/jsx-filename-extension
      return <h1> Something went wrong. </h1>;
    }

    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
