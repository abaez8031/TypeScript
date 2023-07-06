"use strict";
//
// let stringArr = ["one", "hey", "Dave"];
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// TS SEES NO ISSUE
let nextVal = addOrConcat(2, 2, "concat");
