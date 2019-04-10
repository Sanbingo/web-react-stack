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
  Table,
} from 'antd';

class MyComponent extends React.Component {
  Name = getBoundFormItem('name', {
    label: '姓名',
    required: true,
  }, Input)

  columns = [{
    key: 'name',
    title: '姓名',
    dataIndex: 'name',
  }, {
    key: 'age',
    title: '年龄',
    dataIndex: 'age',
  }]

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
      queryData(fieldsValue);
      return fieldsValue;
    });
  }

  render() {
    const { tableData } = this.props;
    return (
      <Card>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <this.Name />
          <Form.Item>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
        <Table columns={this.columns} dataSource={tableData} />
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
  tableData: PropTypes.array.isRequired,
};
