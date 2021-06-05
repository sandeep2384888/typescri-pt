class Employee {
  readonly Ename: string;
  private Cname: string;
  public salary: number;
  // constructor(
  //   readonly Ename: string, 
  //   private Cname: string, 
  //   public salary: number,
  // ){}
   constructor(e: string, c: string, s: number){
     this.Ename = e;
     this.Cname = c;
     this.salary = s;
   }
      format() {
      return `${this.Cname} pays Rs.${this.salary} to ${this.Ename}`;
    }
  }
  
  const EmpOne = new Employee('Shubham', 'MINDTREE', 350000);
  const EmpTwo = new Employee('Sujay', 'L&T', 350003);
  
  let employees: Employee[] = [];
  employees.push(EmpOne)
  employees.push(EmpTwo);
  
  console.log(employees);

  employees.forEach(emp => {
    //emp.Ename="Rohan";
    console.log(emp.Ename, emp.salary, emp.format());
  })