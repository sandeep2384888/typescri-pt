import {Employees} from './classes/Employees.js'

// interfaces
 interface IsPerson {
    name: string;
    age: number;
  }
  
  const me: IsPerson = {
    name: 'shaun',
    age: 30
  };
  console.log(me);
  
  
  const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
  }
  
  greetPerson(me);
    
    const EmpOne = new Employees('Shubham', 'MINDTREE', 350000);
    const EmpTwo = new Employees('Sujay', 'L&T', 350003);
    
    let employees: Employees[] = [];
    employees.push(EmpOne)
    employees.push(EmpTwo);
    
    console.log(employees);
  
    employees.forEach(emp => {
      console.log(emp.Ename, emp.salary, emp.format());
    })