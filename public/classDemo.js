"use strict";
var Employee = /** @class */ (function () {
    // constructor(
    //   readonly Ename: string, 
    //   private Cname: string, 
    //   public salary: number,
    // ){}
    function Employee(e, c, s) {
        this.Ename = e;
        this.Cname = c;
        this.salary = s;
    }
    Employee.prototype.format = function () {
        return this.Cname + " pays Rs." + this.salary + " to " + this.Ename;
    };
    return Employee;
}());
var EmpOne = new Employee('Shubham', 'MINDTREE', 350000);
var EmpTwo = new Employee('Sujay', 'L&T', 350003);
var employees = [];
employees.push(EmpOne);
employees.push(EmpTwo);
console.log(employees);
employees.forEach(function (emp) {
    //emp.Ename="Rohan";
    console.log(emp.Ename, emp.salary, emp.format());
});
