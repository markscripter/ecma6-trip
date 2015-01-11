'use strict';
var Foo = function Foo(first, last) {
  this.first = first;
  this.last = last;
};
($traceurRuntime.createClass)(Foo, {
  getFirst: function() {
    return this.first;
  },
  getLast: function() {
    return this.last;
  },
  getFullname: function() {
    return (this.getFirst() + " " + this.getLast());
  }
}, {});
var Bar = function Bar(first, last) {
  $traceurRuntime.superConstructor($Bar).call(this, first, last);
};
var $Bar = Bar;
($traceurRuntime.createClass)(Bar, {getFullname: function() {
    return ("Your name is: " + $traceurRuntime.superGet(this, $Bar.prototype, "getFullname").call(this));
  }}, {}, Foo);
var foo = new Foo("mark", "scripter");
var bar = new Bar("bill", "workls");
console.log(foo.getFullname());
console.log(bar.getFullname());
