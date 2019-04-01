/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types';
import Todo from './Todo' // eslint-disable-line

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {' '}
    {
  todos.map((todo, index) => (
    <Todo
      key={index}
      {...todo}
      onClick={
      () => onTodoClick(index)
    }
    />
  ))
}
    {' '}

  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
