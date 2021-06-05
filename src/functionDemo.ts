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
  const minus = (a: number, b: number): number => {
       return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);

  //Type Aliases

  type StringOrNumber=string | number;
  type ObjWithName={name: string, uid:StringOrNumber}; 

  const product = (pid:StringOrNumber, pname:string) => {
    console.log(`${pname} has pid: ${pid}`);
   }

   const greet=(user:ObjWithName) => {
       console.log(`hello, ${user.name}`);
   }
product(12,"jhon");
greet({name:"shubham",uid:12});