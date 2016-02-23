var React = require('react');

var TodoDetailView = React.createClass({

deleteButton: function () {
  return (
    <button onClick={ this.handleDeleteClick }>Delete</button>
  );
},

handleDeleteClick: function (e) {
    e.preventDefault();
    var id = this.props.id;
    TodoStore.destroy(id);
},

  render: function() {
    return (
      <div>
        <div>{ this.props.body }</div>
        <div>{ this.deleteButton() }</div>
      </div>
    );
  }
});

module.exports = TodoDetailView;
