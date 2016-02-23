var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoList = require('./components/todo_list.jsx');

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
      <TodoList />,
      document.getElementById("root")
    );
  });
