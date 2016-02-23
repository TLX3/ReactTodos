var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    DoneButton = require('./done_button.jsx');

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
        <DoneButton done={this.props.listitem.done} id={this.props.listitem.id}/>
        <button onClick={this.handleDestroy}> Delete </button>
      </div>
    );
  }
});

module.exports = TodoListItem;
