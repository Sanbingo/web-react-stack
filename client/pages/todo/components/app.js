/* eslint-disable react/jsx-filename-extension */
import React from 'react' // eslint-disable-line
import Footer from './footer' // eslint-disable-line
import VisibleTodoList from '../containers/visibleTodoList' // eslint-disable-line
import AddTodo from '../containers/addTodo' // eslint-disable-line

const App = () => (
  <div>
    <h1>App page!</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
