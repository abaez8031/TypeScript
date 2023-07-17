
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

// type stringOrNumber = string | number

// type stringOrNumberArray = (string | number)[]

// type Guitarist = {
//   name?: string,
//   active?: boolean,
//   albums: (string | number)[]
// }

// type userId = stringOrNumber

// // Literal Types
// let myName: "Dave"

// let userName: "Dave" | "Amy" | "John"

// const add = (a: number, b: number): number => {
//   return a + b
// }

// const logMsg = (message: any): void => {
//   console.log(message);
// }

// logMsg("Hello!")
// logMsg(add(2,3))

// let subtract = function(c: number, d: number): number {
//   return c - d
// }

// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction { (a: number, b: number): number;
// // }

// let multiply: mathFunction = function(c,d) {
//   return c * d;
// }

// logMsg(multiply(2,2))

// // optional parameters
// // optional parameter must be last.
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c
//   }
//   return a + b
// }

// //10
// const sumAll = (a: number = 10, b: number, c: number = 2): number => { 
//     return a + b + c
// }

// logMsg(addAll(2,3,2))
// logMsg(addAll(2,3))
// logMsg(sumAll(2,3))
// logMsg(sumAll(undefined,3))

// // Rest Parameters
// const total = (...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr)
// }

// logMsg(total(1,2,3,4))

// const createError = (errorMsg: string): never => {
//   throw new Error (errorMsg)
// }

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++
//     if(i > 100) break
//   }
// }

// // custom typeguard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false
// }

// // use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "number") return "number"
//   if (typeof value === "string") return "string"
//   return createError("This should never happen!")
// }

// type One = string;
// type Two = string | number;
// type Three = "hello"

// let a: One = "hello";
// let b = a as Two;
// let c = a as Three

// let d = <One>"world"
// let e = <string | number>"world"

// const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
//   if(c === "add") return a + b
//   return "" + a + b
// }

// let myVal: string = addOrConcat(2,2,"concat") as string
// // TS SEES NO ISSUE
// let nextVal: number = addOrConcat(2,2,"concat") as number

class Coder {
  secondLang!: string

  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string = "Typescript") {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge () {
    return `Hello I'm ${this.age}`
  }
}


const Dave = new Coder("Dave", "Rock", 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number) {
      super(name,music,age);
      this.computer = computer
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25)
console.log(Sara.getLang())

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument
  }
  play(action:string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist("Jimmy", "guitar")
console.log(Page.play("strums"))

class Peeps {
  static count: number = 0;
  
  static getCount(): number {
    return Peeps.count
  }

  public id: number
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count
  }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(Peeps.count)

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if(Array.isArray(value) && value.every(ele => typeof(ele) === "string")) {
      this.dataState = value;
      return
    }
    else throw new Error("Param is not an array of strings")
  }
}