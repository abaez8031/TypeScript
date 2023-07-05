//
// let stringArr = ["one", "hey", "Dave"];

// let guitars = ["Strat", "Les Paul", 5150];

// let mixedData = ["EVH", 1984, true];

// stringArr[0] = "John";
// stringArr.push("hey");

// guitars[0] = 1984;
// // guitars.unshift(true); // NOT ALLOWED
// guitars.unshift("Jim");

// let test = [];
// let bands: string[] = [];
// bands.push("Van Halen")
// // bands.push(true) NOT ALLOWED

// // Tuple
// let myTuple: [string,number,boolean] = ["Dave", 42,true];
// let mixed = ["John", 1, false]
// // myTuple[3] = 42 NOT ALLOWED

// //Objects
// let myObj: object;
// myObj = [];
// console.log(typeof myObj)
// myObj = bands;
// myObj = {};

// const exampleObj = {
//   prop1: "Dave",
//   prop2: true
// }

// // exampleObj.prop2 = 42 NOT ALLOWED

// interface Guitarist {
//   name?: string,
//   active?: boolean,
//   albums: (string | number)[]
// }

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   albums: [1984,5150, "OU812"]
// }

// let jp: Guitarist = {
//   name: "Jimmy",
//   albums: ["I", "II", "IV"]
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name}`
// }

// console.log(greetGuitarist(jp))

// //Enums
// // Unlike most TS features, enums are not a type-level addition to JS but something added to the language and runtime.

// enum Grade {
//   U = 1,D,C,B,A
// }

// console.log(Grade.U)

// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

type userId = stringOrNumber

// Literal Types
let myName: "Dave"

let userName: "Dave" | "Amy" | "John"

const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg("Hello!")
logMsg(add(2,3))