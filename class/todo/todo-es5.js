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
($traceurRuntime.createClass)(TodoView, {
  registerEvents: function() {
    "use strict";
    document.getElementById("addTask").onclick = this.handleAdd.bind(this);
    var delTasks = document.querySelectorAll(".deleteTask");
    for (var i = 0; i < delTasks.length; i++) {
      delTasks[i].onclick = this.handleDelete.bind(this);
    }
  },
  handleAdd: function() {
    "use strict";
    var el = document.querySelector('#task'),
        inputVal = el.value;
    this.model.add(inputVal);
    el.value = "";
    this.render();
  },
  handleDelete: function(e) {
    "use strict";
    var taskEl = e.currentTarget.previousElementSibling.textContent;
    this.model.remove(taskEl);
    this.render();
  },
  render: function() {
    "use strict";
    var view = '<ul>';
    this.model.tasks.forEach((function(val) {
      view += ("<li><span class=\"taskVal\">" + val + "</span> <span class=\"deleteTask\">X Delete</span></li>");
    }));
    view += '</ul>';
    this.el.innerHTML = view;
    this.registerEvents();
    document.getElementById('task').focus();
  }
}, {});
document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var todoView = new TodoView('.todo-list');
    todoView.render();
  }
};
