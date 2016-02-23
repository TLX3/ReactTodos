
var _steps = {},
    _callbacks = [];

var StepStore = {
  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  },

  addChangedHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function (callback) {
    var idx = _callbacks.indexOf(callback);

    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  },

  all: function (todoId) {
    _steps[todoId] = _steps[todoId] || [];
    return _steps[todoId].slice();
  },

  find: function (todoId, stepId) {
    _steps[todoId] = _steps[todoId] || [];

    return _steps[todoId].findIndex(function (step) {
      if (step.id === stepId) { return true; }
    });
  },

  fetch: function (todoId) {
    $.get("/api/todos/" + todoId + "/steps", {}, function (steps) {
      _steps[todoId] = steps;
      StepStore.changed();
    });
  },

  create: function (todoId, data) {
    var url = "/api/todos/" + todoId + "/steps";

    $.post(url, { step: data }, function (step) {
      _steps[todoId] = _steps[todoId] || [];
      _steps[todoId].push(step);
      StepStore.changed();
    });
  },

  destroy: function (todoId, stepId) {
    var stepIndex = StepStore.find(todoId, stepId),
        step = _steps[todoId][stepIndex];

    if (step) {
      $.ajax({
        url: "/api/steps/" + stepId,
        type: "DELETE",
        success: function () {
          _steps[todoId].splice(stepIndex, 1);
          StepStore.changed();
        }
      });
    }
  },

  toggleDone: function (todoId, stepId) {
    var stepIndex = StepStore.find(todoId, stepId),
        step = _steps[todoId][stepIndex],
        updatedStatus;

    if (step) {
      updatedDone = !step.done;

      $.ajax({
        url: "/api/steps/" + stepId,
        type: "PATCH",
        data: { step: { done: updatedDone } },
        success: function () {
          step.done = updatedDone;
          StepStore.changed();
        }
      });
    }
  }
};

module.exports = StepStore;
