// arrays
let names = ['luigi', 'mario', 'yoshi'];
// for (var val of names) {
//   console.log(val);
// }
names.push('toad');
console.log(names);

let numbers = [10, 20, 12, 15];
// for (let i = 0; i < numbers.length; i++) {
//   console.log (numbers[i]);
// }

numbers.push(25);
// console.log(numbers);

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
console.log(mixed);

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};
//console.log(ninja);

ninja.age = 40;
ninja.name = 'ryu';
//console.log(ninja);

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40
};
//console.log(ninja);