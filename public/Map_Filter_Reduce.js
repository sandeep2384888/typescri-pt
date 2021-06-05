"use strict";
var arr = [3, 7, 4, 6, 8, 1, 9];
/*
let arr1=arr.filter(a => a%2===0);
console.log(arr1)*/
// let arr3=arr.map(a => a*a);
// console.log(arr3)
// let arr4=[2,9,4,3];
// let arr5=arr4.reduce((a,b) => a+b);
// console.log(arr5);
var arrMix = arr.filter(function (a) { return a % 2 === 0; })
    .map(function (a) { return a * a; })
    .reduce(function (a, b) { return a + b; });
console.log(arrMix);
