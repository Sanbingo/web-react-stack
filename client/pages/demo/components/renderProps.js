/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// 依赖注入
// 1、思路是将函数（执行结果是返回新的组件）作为子组件传入，在父组件的render方法中执行此函数
export const WithChildrenRender = (props) => {
  const style = { color: 'red' };
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const name = 'San';
  const allProps = { name, ...props };

  return (
    <div style={style}>
      {children(allProps)}
    </div>
  );
};

// 2、思路是将函数（执行结果是返回新的组件）作为属性传入，在父组件的render方法中执行此函数
export const WithPropsRender = (props) => {
  const style = { color: 'red' };
  // eslint-disable-next-line react/prop-types
  const { ok, cancel } = props;
  // const name = getUserName();
  const name = 'San';
  const allProps = { name, ...props };

  if (name) {
    return (
      <div style={style}>
        {ok(allProps)}
      </div>
    );
  }
  return (
    <div style={style}>
      {cancel(allProps)}
    </div>
  );
};

export default {};
