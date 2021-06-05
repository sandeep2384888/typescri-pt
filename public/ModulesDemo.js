"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employees_js_1 = require("./classes/Employees.js");
var me = {
    name: 'shaun',
    age: 30
};
console.log(me);
var greetPerson = function (person) {
    console.log('hello ', person.name);
};
greetPerson(me);
var EmpOne = new Employees_js_1.Employees('Shubham', 'MINDTREE', 350000);
var EmpTwo = new Employees_js_1.Employees('Sujay', 'L&T', 350003);
var employees = [];
employees.push(EmpOne);
employees.push(EmpTwo);
console.log(employees);
employees.forEach(function (emp) {
    console.log(emp.Ename, emp.salary, emp.format());
});
