/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import {
//   mapValues,
// } from 'lodash';
import {
  Card, Input, Button, Form, Select, Checkbox,
  DatePicker, InputNumber, Switch, Radio, Row, Col, Upload, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import {
  FormCreate,
  getBoundFormItem,
} from '@Utils';
import Loadable from 'react-loadable';

// 动态引入组件
const ModalComponent = Loadable({
  loader: () => import('../modals/add-hotel-modal/m'),
  loading: () => <p>Loading</p>,
});
// 旧: 显式引入
// import ModalComponent from '../modals/add-hotel-modal/m';

const { Option } = Select;
const { RangePicker } = DatePicker;

class ManageComponent extends React.Component {
  Name = getBoundFormItem('name', {
    label: '姓名',
    required: true,
  }, Input)

  Pwd = getBoundFormItem('pwd', {
    label: '密码',
    required: true,
  }, Input, {
    type: 'password',
  })

  Sex = getBoundFormItem('sex', {
    label: '性别',
    required: true,
  }, Select, {
    placeholder: '请选择性别',
    mode: 'multiple',
  })

  Onoff = getBoundFormItem('onoff', {
    label: '开关',
    required: true,
  }, Switch)

  Date = getBoundFormItem('date', {
    label: '日期',
    required: true,
  }, DatePicker)

  handleSubmit = (e) => {
    const { form: { validateFields } } = this.props;
    e.preventDefault();
    validateFields((err, fieldsValue) => {
      if (err) {
        return err;
      }
      console.log('fieldsValue', fieldsValue);
      return fieldsValue;
    });
  }

  passwordValidator = (rule, value, callback) => {
    callback();
  }

  render() {
    const { form: { getFieldDecorator }, openTestModal } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Card>
        <Form layout="horizontal" {...formItemLayout} onSubmit={this.handleSubmit}>
          <this.Name />
          <this.Pwd disabled />
          {/* <Form.Item label="email">
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />,
            )}
          </Form.Item> */}
          {/* <Form.Item label="password">
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.passwordValidator,
              }],
            })(
              <Input type="password" />,
            )}
          </Form.Item> */}
          <Form.Item label="mobile">
            {getFieldDecorator('mobile', {
              rules: [{
                required: true, message: 'Please input your mobile!',
              }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />,
            )}
          </Form.Item>
          <this.Date />
          <Form.Item
            label="DatePicker"
          >
            {getFieldDecorator('date-picker', {
              rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            })(
              <DatePicker />,
            )}
          </Form.Item>
          <Form.Item
            label="RangePicker"
          >
            {getFieldDecorator('range-picker', {
              rules: [{ type: 'array', required: true, message: 'Please select time!' }],
            })(
              <RangePicker />,
            )}
          </Form.Item>
          <this.Sex>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </this.Sex>
          <Form.Item
            label="Select"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item
            label="Select[multiple]"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item
            label="InputNumber"
          >
            {getFieldDecorator('input-number', { initialValue: 3 })(
              <InputNumber min={1} max={10} />,
            )}
            <span className="ant-form-text"> machines</span>
          </Form.Item>
          <this.Onoff />
          <Form.Item
            label="Switch22"
          >
            {getFieldDecorator('switch33', { valuePropName: 'checked' })(
              <Switch />,
            )}
          </Form.Item>
          <Form.Item
            label="Radio.Group"
          >
            {getFieldDecorator('radio-group')(
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item
            label="Radio.Button"
          >
            {getFieldDecorator('radio-button')(
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item
            label="Checkbox.Group"
          >
            {getFieldDecorator('checkbox-group', {
              initialValue: ['A', 'B'],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                  <Col span={8}><Checkbox disabled value="B">B</Checkbox></Col>
                  <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                  <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                  <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                </Row>
              </Checkbox.Group>,
            )}
          </Form.Item>
          <Form.Item
            label="Upload"
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the agreement</Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
            <Button style={{ marginLeft: '5px' }} onClick={() => openTestModal({ id: 333 })}>打开</Button>
            <ModalComponent />
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

// 改造前：API配置
// export default Form.Create({
//   name: 'form-component',
//   onValuesChange: (props, fields) => {
//     props.searchBox(fields);
//   },
//   mapPropsToFields: (props) => {
//     const {
//       searchBoxData,
//     } = props;
//     // mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。
//     // store上存储的名称不能和action的名称一样，否则无法正确读取store上的值。
//     // 使用lodash的mapValues函数重构正确的数据格式。
//     return ({
//       ...mapValues(searchBoxData, item => Form.createFormField({ value: item })),
//     });
//   },
// })(ManageComponent);

// 改造后，约定配置
export default FormCreate({
  onChange: 'searchBox',
  mapFields: 'searchBoxData',
})(ManageComponent);

ManageComponent.propTypes = {
  searchData: PropTypes.func.isRequired,
  openTestModal: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  // getFieldDecorator: PropTypes.func.isRequired,
};
