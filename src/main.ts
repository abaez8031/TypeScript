//
let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
// guitars.unshift(true); // NOT ALLOWED
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen")
// bands.push(true) NOT ALLOWED

// Tuple
let myTuple: [string,number,boolean] = ["Dave", 42,true];
let mixed = ["John", 1, false]
// myTuple[3] = 42 NOT ALLOWED

//Objects