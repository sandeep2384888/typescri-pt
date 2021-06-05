"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet();
// greet = () => {
//   console.log('hello, again');
// }
// greet();
//const add = (a: number, b: number, c?: number | string ) => {
// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b);
//     console.log(c);
// }
//   add(5, 10);
//   add(5, 10, 'ninja');
//const minus = (a: number, b: number)=> {
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
var product = function (pid, pname) {
    console.log(pname + " has pid: " + pid);
};
var greet = function (user) {
    console.log("hello, " + user.name);
};
product(12, "jhon");
greet({ name: "shubham", uid: 12 });
