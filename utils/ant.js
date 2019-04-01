/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Form } from 'antd';
import { mapValues } from 'lodash';

const ReactContext = React.createContext();

// 获取组件名称，把函数转成字符串，定位截取组件名称。
const getComponentName = (component) => {
  const fn = component.toString(); // function xxxx(props) {...}
  const endIndex = fn.indexOf('(');
  return fn.substring(8, endIndex);
};

// 根据组件类型，设置不同的valuePropName
const getValuePropName = (component) => {
  // 获取组件的名称
  const componentName = getComponentName(component);
  let valuePropName = 'value'; // 'check'/'fileList'/'value'

  switch (componentName) {
    case 'Switch':
      valuePropName = 'checked';
      break;
    case 'Upload':
      valuePropName = 'fileList';
      break;
    default:
      valuePropName = 'value';
      break;
  }
  return valuePropName;
};

// eslint-disable-next-line max-len
export const getBoundFormItem = (fieldName, config, WrapComponent, originalAttrs) => (propsArgv) => {
  // eslint-disable-next-line react/prop-types
  const {
    disabled,
    children,
  } = propsArgv;

  const {
    label,
    required,
  } = config;
  const rules = config.rules || [];
  const valuePropName = getValuePropName(WrapComponent);
  // 设置控件是否必填
  if (required) {
    rules.unshift({ required: true, message: `请填写${label}信息` });
  }
  return (
    <ReactContext.Consumer>
      {
        (props = {}) => {
          const {
            // eslint-disable-next-line react/prop-types
            form: { getFieldDecorator },
          } = props;
          // 消费者接受提供者透传下来的props属性，这样就可以不用逐级显式传递props属性
          return (
            <Form.Item label={label}>
              {getFieldDecorator(fieldName, {
                rules,
                valuePropName,
              })(
                <WrapComponent {...originalAttrs} disabled={disabled}>
                  {children}
                </WrapComponent>,
              )}
            </Form.Item>
          );
        }
        }
    </ReactContext.Consumer>
  );
};

// eslint-disable-next-line arrow-body-style
export const FormCreate = (config = {}) => {
  return (Component) => {
    // 简化Form.Create的配置
    const cfg = {
      onValuesChange: (props, fields) => {
        if (config.onChange) {
          props[config.onChange](fields);
        }
      },
      mapPropsToFields: (props) => {
        const formData = config.mapFields && props[config.mapFields];
        // mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。
        // store上存储的名称不能和action的名称一样，否则无法正确读取store上的值。
        // 使用lodash的mapValues函数重构正确的数据格式。
        if (!formData) {
          return {};
        }
        return ({
          ...mapValues(formData, item => Form.createFormField({
            value: item,
          })),
        });
      },
    };
    // 利用React的提供者模式，把props属性透传下去
    // 利用getBoundFormItem函数，在From.Item组件里面也可以获得this.props.form属性。
    return Form.create(cfg)(props => (
      <ReactContext.Provider value={props}><Component {...props} /></ReactContext.Provider>
    ));
  };
};

export default {};
