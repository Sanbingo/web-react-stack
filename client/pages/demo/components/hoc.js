/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// 什么都不做的高阶组件
export const withNothing = (Component) => {
  const NewComponent = props => <Component {...props} />;
  return NewComponent;
};

// 高阶组件中返回新组件有3种方式
// 1、返回一个无状态组件
export const withTextRed = (Component) => {
  const NewComponent = props => <div style={{ color: 'red' }}><Component {...props} /></div>;
  return NewComponent;
};

// 2、返回一个新的class组件
export const withLifeCycle = (WrapComponent) => {
  class NewComponent extends React.Component {
    state = {
      color: null,
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          color: 'green',
        });
      }, 2000);
    }

    render() {
      const { color } = this.state;
      return (
        <div style={{ color }}>
          <WrapComponent {...this.props} />
        </div>
      );
    }
  }
  return NewComponent;
};

// 3、继承原组件后返回一个新的组件，前提传入的组件是class组件！
// eslint-disable-next-line arrow-body-style
export const withInherit = (WrapComponent) => {
  return class NewComponent extends WrapComponent {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }

    state = {
      color: null,
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          color: 'blue',
        });
      }, 2000);
    }

    render() {
      const { color } = this.state;
      return (
        <div style={{ color }}>
          <WrapComponent {...this.props} />
        </div>
      );
    }
  };
};

export default {};
