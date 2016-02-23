var React = require('react'),
    TodoStore = require('../stores/todo_store.js');

var TodoListItem = React.createClass({

  handleDestroy: function(e) {
    e.preventDefault();
    var id = this.props.listitem.id;
    TodoStore.destroy(id);
  },

  render: function() {
    return (
      <div>
        <div>
          {this.props.listitem.title}
        </div>
        <div>
          {this.props.listitem.body}
        </div>
        <button onClick={this.handleDestroy}> Delete </button>
      </div>
    );
  }
});

module.exports = TodoListItem;
