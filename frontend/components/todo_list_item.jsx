var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          {this.props.listitem.title}
        </div>
        <div>
          {this.props.listitem.body}
        </div>
      </div>
    );
  }
});

module.exports = TodoListItem;
