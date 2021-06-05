export class Employees{
  
    constructor(
      readonly Ename: string, 
      private Cname: string, 
      public salary: number,
    ){}
    
      format() {
        return `${this.Cname} pays Rs.${this.salary} to ${this.Ename}`;
      }
}