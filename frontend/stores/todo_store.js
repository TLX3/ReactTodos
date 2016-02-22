var _todos = [];
var _callbacks = [];

var TodoStore = {

  changed: function() {
      _callbacks.forEach(function(callback) {
        callback();
      });
  },

  addChangedHandler: function(callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function(callback) {
    var idx = _callbacks.indexOf(callback);
    if(idx !== -1) {
      _callbacks.splice(idx,1);
    }
  },

  all: function() {
    return _todos;
  },

  fetch: function() {
    $.ajax({
      type: 'GET',
      url: '/api/todos/',
      success: function(resp) {
        _todos = resp;
        TodoStore.changed();
      }
    });
  },

  create: function(todo) {
    $.ajax({
      type: 'POST',
      data: todo,
      url: '/api/todos/',
      success: function(resp) {
        _todos.push(resp);
        TodoStore.changed();
      }
    });
  },

  destroy: function(id) {
    var idx = TodoStore.find(id);
    if(idx !== -1) {
      $.ajax({
        url: '/api/todos/' + id,
        type: 'DELETE',
        success: function(resp) {
          _todos.splice(idx,1);
          TodoStore.changed();
        }
      });
    }
  },

  find: function(id) {
    var idx = -1;
    _todos.forEach(function(todo, index) {
      if(todo.id === id) {
        idx = index;
      }
    });
    return idx;
  },

  toggleDone: function(id) {
    var idx = TodoStore.find(id);
    var updated;
    var data = {};
    if(idx !== -1) {
      updated = (_todos[idx].done ? false : true);
      data = { todo: { done: updated } };
    }
    $.ajax({
      type: 'PATCH',
      url: '/api/todos/' + id,
      data: data,
      success: function(resp) {
        TodoStore.changed();
      }
    });
  }

};

module.exports = TodoStore;
