/* eslint-disable react/sort-comp */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Form, Input } from 'antd';
import { mapValues } from 'lodash';
// eslint-disable-next-line import/no-unresolved
import { getBoundFormItem } from '@Utils';

class FormComponent extends React.Component {
    Name = getBoundFormItem('name', {
      label: '姓名',
      required: true,
    }, Input)

    render() {
      return (
        <Form layout="inline">
          <this.Name {...this.props} />
        </Form>
      );
    }
}

export default Form.create({
  onValuesChange: (props, fields) => {
    props.changeForm(fields);
  },
  mapPropsToFields: (props) => {
    const {
      formData,
    } = props;
    // mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。
    // store上存储的名称不能和action的名称一样，否则无法正确读取store上的值。
    // 使用lodash的mapValues函数重构正确的数据格式。
    return ({
      ...mapValues(formData, item => Form.createFormField({ value: item })),
    });
  },
})(FormComponent);
