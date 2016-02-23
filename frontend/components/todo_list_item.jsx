var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    DoneButton = require('./done_button.jsx'),
    TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({

  getInitialState: function() {
    return {detailed: false};
  },

  handleDestroy: function(e) {
    e.preventDefault();
    var id = this.props.listitem.id;
    TodoStore.destroy(id);
  },

  handleDetail: function(e) {
    this.setState({detailed: !this.state.detailed});
  },

  render: function() {
    return (
      <div>
        <div>
          <h1 onClick={this.handleDetail}>{this.props.listitem.title}</h1>
        </div>
        <div>
          <h2>Content:</h2>
          { this.state.detailed ? <TodoDetailView body={this.props.listitem.body} /> : ""}
        </div>
        <DoneButton done={this.props.listitem.done} id={this.props.listitem.id}/>
      </div>
    );
  }
});

module.exports = TodoListItem;
