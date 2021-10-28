"use strict";
function sayHello(person) {
    return "Hello," + person;
}
let user = "Clark";
console.log(sayHello(user));
let isDone = false;
let createdByNewBoolean = new Boolean(1); // 返回object
let createdByBoolean = Boolean(1); // 返回boolean
function alertName() {
    alert("This is Clark!");
}
let unusable = undefined; // undefined/null;
// let num: number = undefined;
let random = Math.random();
let isOk = false;
if (random < 0.5)
    isOk = true;
let what = isOk ? "string" : 123;
console.log(what);
let anyNum;
anyNum = "seven";
anyNum = 123;
function logMe(x) {
    console.log(x);
}
const obj2 = {
    a: 1,
    b: 2,
    c: 3,
};
for (const k in obj2) {
    const v = obj2[k];
}
let x = undefined;
// x = undefined;
let z = null;
let unionType = "123";
let Clark = {
    location: "WJ",
    name: "Clark",
    age: 123,
    h2: [1, 2, 3, 4],
    h4: { x: 123, y: 789 },
};
let ad = {
    type: "ab",
    game: 1,
    count: 2,
};
let fibonacci = [1, 2, 3, 4];
let fibo = [1, 2, 3, 4, "12"];
let mySum = (x, y) => {
    return x + y;
};
let newSum = (x, y) => {
    return x + y;
};
let mySearch = (source, subString) => {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName = "Clark") {
    if (firstName) {
        return firstName + lastName;
    }
    return lastName;
}
function myPush(array, ...rest) {
    rest.forEach((item) => {
        array.push(item);
    });
}
myPush([], 1, "2", 3, true);
