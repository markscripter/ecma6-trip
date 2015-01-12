'use strict';

class Foo {
 constructor(first, last){
  this.firstName = first;
  this.lastName = last;
 }

 toString(){
  return `${this.firstName} ${this.lastName}`;
 }
}

var foo = new Foo("mark","scripter");

class Bar extends Foo {
	constructor(first, last){
		super(first, last);
	}
	toString(){
		return `Your name is: ${super.toString()}`;
	}
}

var bar = new Bar("bill","workls");

console.log(foo.toString());
console.log(bar.toString());
