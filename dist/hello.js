"use strict";
function sayHello(person) {
    return "Hello," + person;
}
var user = "Clark";
console.log(sayHello(user));
var isDone = false;
var createdByNewBoolean = new Boolean(1); // 返回object
var createdByBoolean = Boolean(1); // 返回boolean
function alertName() {
    alert("This is Clark!");
}
var unusable = undefined; // undefined/null;
// let num: number = undefined;
var random = Math.random();
var isOk = false;
if (random < 0.5)
    isOk = true;
var what = isOk ? "string" : 123;
console.log(what);
