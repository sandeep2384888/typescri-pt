let rollno: number;
let fullName: string;
let male: boolean;
rollno = 17;
fullName='Shubham';
male=true;
console.log(rollno+" "+fullName+" "+male);

let telephone : (string|number);

telephone='16';
console.log(telephone);

telephone=123546;
console.log(telephone);

let array:string[]=[]

array.push("String1");
console.log(array);

let mixedArray:(string|number|boolean)[]=[]
mixedArray.push("Sample1");
mixedArray.push(101010);
mixedArray.push(false);
console.log(mixedArray);

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
console.log(ninjaTwo);