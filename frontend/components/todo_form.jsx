var React = require('react'),
    TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({

  getInitialState: function() {
    return { title: "", body: ""};
  },

  updateTitle: function(e) {
    this.setState({ title: e.target.value });
  },

  updateBody: function(e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = { title: this.state.title, body: this.state.body };
    TodoStore.create(data);
    this.setState({ title: "", body: "" });
  },

  render: function() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" value={this.state.title} onChange={this.updateTitle} placeholder="Title"/>
        </div>
        <div>
          <textarea value={this.state.body} onChange={this.updateBody} placeholder="Body"/>
        </div>
          <input type="submit" />
       </form>
    );
  }
});

module.exports = TodoForm;
