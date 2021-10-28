"use strict";
let myName = '小明';
let count = 100;
let flag = true;
let u = undefined;
let timer = null;
function getName(param) { }
; //空
let obj = 123; //any
let animal = 'cat'; //字面量
let arr = [1, 2, 3];
let tuple1 = ['测试', true]; //元组：可以单独写类型的数组
function test(param1, param2, param3) {
    return param1 + param2;
} //函数写类型
const sum = (param1, param2, param3) => {
    return param1 + param2;
};
let mysum = sum; //定义函数法1
let mysum2 = sum;
let haha; //联合类型
let object;
object = {
    name: '123',
    age: 12
}; //写对象法1
let object2 = {
    name: '123',
    age: 12
};
function getLength(params) {
    const str = params; // const str=<string>params
    if (str.length) {
        return str.length;
    }
    return str.toString().length;
} //类型断言
function getLength2(params) {
    if (typeof params === 'string') {
        return params.length;
    }
    return params.toString().length;
}
class Parent {
    constructor(name) {
        this.name = name;
        this.money = 123;
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
}
Parent.age = 3;
console.log(Parent.age);
class Sun extends Parent {
    constructor(name) {
        super(name);
        this.son_money = this.money;
    }
}
