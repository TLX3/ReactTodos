var React = require('react'),
    TodoStore = require('../stores/todo_store.js');

var DoneButton = React.createClass({

  handleDone: function(e) {
    e.preventDefault();
    TodoStore.toggleDone(this.props.id);
  },

  render: function() {
    var text = (this.props.done) ? "Undo" : "Done";
    return (
      <button onClick={this.handleDone}>{text}</button>
    );
  }
});

module.exports = DoneButton;
