/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types';
import Todo from './todo' // eslint-disable-line

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};
export default class TodoList extends React.Component {
  render() {
    const {
      todos,
      toggleTodo,
      visibilityFilter,
    } = this.props;
    const filterTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <ul>
        {' '}
        {
        filterTodos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            onClick={
            () => toggleTodo(index)
          }
          />
        ))
      }
        {' '}

      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};
