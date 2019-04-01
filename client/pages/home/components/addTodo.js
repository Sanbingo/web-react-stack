/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
// import AddTodo from '../../todo/containers/addTodo';

export default class AddTodoComponent extends React.Component {
  render() {
    let input;
    const { addTodo } = this.props;
    return (
      <div>
        <form onSubmit={
        (e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }
      }
        >
          <input ref={
          (node) => {
            input = node;
          }
        }
          />
          {' '}
          <button type="submit"> Add Todo </button>
          {' '}

        </form>
      </div>
    );
  }
}

AddTodoComponent.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
