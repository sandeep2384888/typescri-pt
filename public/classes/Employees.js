"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
var Employees = /** @class */ (function () {
    function Employees(Ename, Cname, salary) {
        this.Ename = Ename;
        this.Cname = Cname;
        this.salary = salary;
    }
    Employees.prototype.format = function () {
        return this.Cname + " pays Rs." + this.salary + " to " + this.Ename;
    };
    return Employees;
}());
exports.Employees = Employees;
