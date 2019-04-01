/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import AddTodo from './addTodo' // eslint-disable-line
import TodoList from './todoList' // eslint-disable-line
import Footer from './footer' // eslint-disable-line

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <AddTodo {...this.props} />
        <TodoList {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}
