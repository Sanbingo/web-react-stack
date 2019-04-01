/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';

export default class StationComponent extends React.Component {
  render() {
    const {
      queryData,
    } = this.props;
    return (
      <Form layout="inline">
        <Form.Item><Input /></Form.Item>
        <Form.Item>
          {' '}
          <Button onClick={
          () => queryData({
            name: 'san',
          })
        }
          >
            {' '}
            Query
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
StationComponent.propTypes = {
  queryData: PropTypes.func.isRequired,
};
