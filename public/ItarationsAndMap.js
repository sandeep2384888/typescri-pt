"use strict";
//Iterations
var myArray = [10, 20, 30, 40, 50,];
//for..in
console.log("Output of for..in loop ");
for (var index in myArray) {
    console.log(index);
}
//for..of
console.log("Output of for..of loop ");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var val = myArray_1[_i];
    console.log(val);
}
//ForEach: only used with array
var apps = ['WhatsApp', 'Instagram', 'Facebook'];
var playStore = [];
apps.forEach(function (item) {
    playStore.push(item);
});
console.log(playStore);
//Map : store values in key:value
var map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.log("Value1= " + map.get(1)); //www.javatpoint.com   
console.log("Value2= " + map.get('1')); //abhishek
console.log("Key is Present= " + map.has(3)); //false
console.log("Size= " + map.size); //4
console.log("Delete value= " + map.delete(1)); //true  
console.log("New Size= " + map.size); //3
//accessing values in map by .keys(),.values(),.entries()
var ageMapping = new Map();
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
//Iterate over map keys  
for (var _a = 0, _b = ageMapping.keys(); _a < _b.length; _a++) {
    var key = _b[_a];
    console.log("Map Keys= " + key); // Rakesh Abhishek Amit     
}
//Iterate over map values  
for (var _c = 0, _d = ageMapping.values(); _c < _d.length; _c++) {
    var value = _d[_c];
    console.log("Map Values= " + value); //40 25 30   
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (var _e = 0, _f = ageMapping.entries(); _e < _f.length; _e++) {
    var entry = _f[_e];
    console.log(entry[0], entry[1]); //  Rakesh 40 | Abhishek 25 | Amit 30
}
//Set : It allows us to store distinct data (each value occur only once) into the List similar to other programming languages. Sets are a bit similar to maps, but it stores only keys, not the key-value pairs.
var studentEntries = new Set();
//Add Values  
studentEntries.add("John");
studentEntries.add("Peter");
studentEntries.add("Gayle");
studentEntries.add("Kohli");
studentEntries.add("Dhawan");
//Returns Set data  
console.log(studentEntries);
//Check value is present or not  
console.log(studentEntries.has("Kohli"));
console.log(studentEntries.has(10));
//It returns size of Set  
console.log(studentEntries.size);
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));
//Clear whole Set  
studentEntries.clear();
//Returns Set data after clear method.  
console.log(studentEntries);
//Chaining of add() method is allowed in TypeScript  
studentEntries.add("John").add("Peter").add("Gayle").add("Kohli");
console.log(studentEntries);
//Iterate over set entries  
console.log("Student Entries are:");
for (var _g = 0, studentEntries_1 = studentEntries; _g < studentEntries_1.length; _g++) {
    var diceNumber = studentEntries_1[_g];
    console.log(diceNumber);
}
// Iterate set entries with forEach  
console.log("Student Entries with forEach are:");
studentEntries.forEach(function (value) {
    console.log(value);
});
