"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = '小明';
var count = 100;
var flag = true;
var u = undefined;
var timer = null;
function getName(param) { }
; //空
var obj = 123; //any
var animal = 'cat'; //字面量
var arr = [1, 2, 3];
var tuple1 = ['测试', true]; //元组：可以单独写类型的数组
function test(param1, param2, param3) {
    return param1 + param2;
} //函数写类型
var sum = function (param1, param2, param3) {
    return param1 + param2;
};
var mysum = sum; //定义函数法1
var mysum2 = sum;
var haha; //联合类型
var object;
object = {
    name: '123',
    age: 12
}; //写对象法1
var object2 = {
    name: '123',
    age: 12
};
function getLength(params) {
    var str = params; // const str=<string>params
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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
        this.money = 123;
    }
    Parent.prototype.eat = function () {
        console.log(this.name + "\u5728\u5403\u996D");
    };
    Parent.age = 3;
    return Parent;
}());
console.log(Parent.age);
var Sun = /** @class */ (function (_super) {
    __extends(Sun, _super);
    function Sun(name) {
        var _this = _super.call(this, name) || this;
        _this.son_money = _this.money;
        return _this;
    }
    return Sun;
}(Parent));
