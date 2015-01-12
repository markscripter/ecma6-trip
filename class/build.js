'use strict';
var Foo = function Foo(first, last) {
  this.firstName = first;
  this.lastName = last;
};
($traceurRuntime.createClass)(Foo, {getFullname: function() {
    return (this.firstName + " " + this.lastName);
  }}, {});
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
