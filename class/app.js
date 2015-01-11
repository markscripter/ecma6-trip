'use strict';

class Foo {
 constructor(first, last){
  this.first = first;
  this.last = last;
 }

 getFirst(){
  return this.first;
 }

 getLast(){
  return this.last;
 }

 getFullname(){
  return `${this.getFirst()} ${this.getLast()}`;
 }
}

class Bar extends Foo {
	constructor(first, last){
		super(first, last);
	}
	getFullname(){
		return `Your name is: ${super.getFullname()}`;
	}
}

var foo = new Foo("mark","scripter");
var bar = new Bar("bill","workls");

console.log(foo.getFullname());
console.log(bar.getFullname());
