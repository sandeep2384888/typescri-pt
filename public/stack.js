"use strict";
var maxSize;
var stack = [];
maxSize = 5;
var isEmpty = function () {
    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
};
var isFull = function () {
    return stack.length == maxSize;
};
var peek = function () {
    console.log("Peek value : " + stack[stack.length - 1]);
};
var Push = function (num) {
    if (isFull()) {
        console.log("Stack is FULL!, can't push : " + num);
    }
    else {
        stack[stack.length++] = num;
        console.log("push " + num + " in stack");
    }
};
var Pop = function () {
    var num = 0;
    if (isEmpty()) {
        console.log("Stack is EMPTY..!!");
    }
    else {
        console.log("Poped " + stack[stack.length - 1] + " from stack");
        stack.length--;
    }
};
Pop();
Push(10);
Push(20);
Push(30);
peek();
console.log(stack);
Pop();
console.log(stack);
Push(40);
console.log(stack);
Push(50);
Pop();
console.log(stack);
peek();
Push(60);
Push(70);
Push(80);
console.log(stack);
