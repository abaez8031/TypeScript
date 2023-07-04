"use strict";
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
let bands = [];
bands.push("Van Halen");
// bands.push(true) NOT ALLOWED
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
// myTuple[3] = 42 NOT ALLOWED
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let jp = {
    name: "Jimmy",
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
