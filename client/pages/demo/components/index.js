/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import PropTypes from 'prop-types';
import Fool from './fool';
import {
  withNothing,
  withTextRed,
  withLifeCycle,
  withInherit,
} from './hoc';

import {
  WithChildrenRender,
  WithPropsRender,
} from './renderProps';

import Tabs from './compose/tabs';
import TabItem from './compose/tabItem';

// 高阶组件
const Text = () => <p>Hello world</p>;
class TextComponent extends React.Component {
  render() {
    return (
      <p>Hello world</p>
    );
  }
}
const NewText = withNothing(Text);
const RedText = withTextRed(Text);
const LifeCycleText = withLifeCycle(Text);
const InheritText = withInherit(TextComponent);

// React Context 上下文
const ReactContext = React.createContext();
// eslint-disable-next-line no-unused-vars
const Layer3 = () => {
  return (
    <ReactContext.Consumer>
      {
        ({ color }) => (
          <div style={{ color }}>
            <p>Hello ReactContext</p>
          </div>
        )
      }
    </ReactContext.Consumer>
  );
};
const Layer2 = () => <Layer3 />;
const Layer1 = () => <Layer2 />;

class MyComponent extends React.Component {
  state = {
    value: 100,
    deepValue: {
      num: 100,
    },
  }

  lessonOne() {
    const {
      value,
      deepValue,
    } = this.state;
    return (
      <div>
        <h2>1、容器组件&展示组件</h2>
        <div>
          <Fool value={value} deepValue={deepValue} />
        </div>
        <button onClick={() => {
          this.setState({
            value: 100,
          });
        }}
        >浅拷贝
        </button>
        <button onClick={() => {
          this.setState({
            deepValue: {
              num: 101,
            },
          });
        }}
        >深拷贝
        </button>
      </div>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  lessonTwo() {
    return (
      <div>
        <h2>2、高阶组件</h2>
        <NewText />
        <RedText />
        <LifeCycleText />
        <InheritText />
      </div>
    );
  }

  lessonThree() {
    return (
      <React.Fragment>
        <h2>3、Render props 组件</h2>
        <WithChildrenRender>
          {Text}
        </WithChildrenRender>
        <WithChildrenRender>
          {props => <p>{props.name}</p>}
        </WithChildrenRender>
        <WithPropsRender
          ok={props => <p>hi~, {props.name}</p>}
          cancel={() => <p>See You ~</p>}
        />
      </React.Fragment>
    );
  }

  lessonFour() {
    const val = { color: 'red' };
    return (
      <React.Fragment>
        <h2>4、提供者模式</h2>
        <ReactContext.Provider value={val}>
          <Layer1 />
        </ReactContext.Provider>
      </React.Fragment>
    );
  }

  lessonFive() {
    return (
      <React.Fragment>
        <h2>5、组合模式</h2>
        <Tabs>
          <TabItem>one</TabItem>
          <TabItem>two</TabItem>
          <TabItem>three</TabItem>
          <TabItem>four</TabItem>
          <TabItem>five</TabItem>
        </Tabs>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.lessonOne()}
        {this.lessonTwo()}
        {this.lessonThree()}
        {this.lessonFour()}
        {this.lessonFive()}
      </div>
    );
  }
}

export default MyComponent;
