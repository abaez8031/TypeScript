"use strict";
//
// let stringArr = ["one", "hey", "Dave"];
// Literal Types
let myName;
let userName;
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
// optional parameter must be last.
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
