var TodoClass = function TodoClass(options) {
  "use strict";
  this.tasks = ["a", "b"];
};
($traceurRuntime.createClass)(TodoClass, {
  add: function(task) {
    "use strict";
    this.tasks.push(task);
  },
  remove: function(task) {
    "use strict";
    var idx = this.tasks.indexOf(task);
    if (idx !== -1) {
      this.tasks.splice(idx, 1);
    }
  },
  toString: function() {
    "use strict";
    var output = "";
    this.tasks.forEach((function(val) {
      output += (val + " ");
    }));
    console.log(output);
  }
}, {});
var TodoView = function TodoView(el) {
  "use strict";
  this.el = document.querySelector(el);
  this.model = new TodoClass();
};
($traceurRuntime.createClass)(TodoView, {render: function() {
    "use strict";
    var view = '<ul>';
    this.model.tasks.forEach((function(val) {
      view += ("<li>" + val + "</li>");
    }));
    view += '</ul>';
    this.el.innerHTML = view;
  }}, {});
document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var todoView = new TodoView('.todo-list');
    todoView.render();
  }
};
