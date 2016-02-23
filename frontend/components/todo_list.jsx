var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    TodoListItem = require('./todo_list_item.jsx'),
    TodoForm = require('./todo_form.jsx')

var TodoList = React.createClass({

  getInitialState: function() {
    return { list: TodoStore.all() };
  },

  todosChanged: function() {
    this.setState({ list: TodoStore.all() });
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function() {
    var todos = this.state.list.map(function(todo) {
      return <TodoListItem key={todo.id} listitem={todo}/>;
    });
    return (
        <div>
            {todos}

            <TodoForm />
        </div>
    );
  }

});

module.exports = TodoList;
