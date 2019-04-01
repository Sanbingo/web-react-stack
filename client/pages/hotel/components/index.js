/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Input, Button, Form } from 'antd';
import PropTypes from 'prop-types';

class StationComponent extends React.Component {
  handleClick = () => {
    const {
      searchData,
    } = this.props;
    searchData({
      name: 'sanbingo',
    });
  }

  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Form layout="inline">
        <Form.Item>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleClick}>
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default StationComponent;

StationComponent.propTypes = {
  searchData: PropTypes.func.isRequired,
};
