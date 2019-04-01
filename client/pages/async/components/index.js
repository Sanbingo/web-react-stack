/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FormCreate,
  getBoundFormItem,
} from '@Utils';
import {
  Card,
  Form,
  Input,
  Button,
} from 'antd';

class MyComponent extends React.Component {
  Name = getBoundFormItem('name', {
    label: '姓名',
    required: true,
  }, Input)

  handleSubmit = (e) => {
    const {
      form: {
        validateFields,
      },
      queryData,
    } = this.props;
    e.preventDefault();
    validateFields((err, fieldsValue) => {
      if (err) {
        return err;
      }
      // console.log('fieldsValue', fieldsValue);
      queryData(fieldsValue);
      return fieldsValue;
    });
  }

  render() {
    return (
      <Card>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <this.Name />
          <Form.Item>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default FormCreate({
  onChange: 'searchData',
  mapFields: 'searchBoxData',
})(MyComponent);

MyComponent.propTypes = {
  form: PropTypes.object.isRequired,
  queryData: PropTypes.func.isRequired,
};
