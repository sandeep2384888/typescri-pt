let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

let mixedArray1: any[] = [];

mixedArray1.push(5);
mixedArray1.push('mario');
mixedArray1.push(false);
console.log(mixedArray1);

let ninjas: { name: any, age: any };

ninjas = { name: 'yoshi', age: 25 };
console.log(ninjas);

ninjas = { name: 25, age: 'yoshi' };
console.log(ninjas);