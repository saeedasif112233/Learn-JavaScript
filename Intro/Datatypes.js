// 7 primitive types :

//string, int, boolean, null, undefined, symbol(to make something unique), BigInt.

const score = 100;
const scoreVal = 10.3; // no float  value
const isLoggedin = false;
const num = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const BigInt1 = 1000000000000000002829894347n;

// Reference types or non primitive types  (given direct ref in memory ):

//Array, Objects, functions

const heros = ["Saeed", "waheed"];

let Objects1 = {
  name:"Saeed",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

