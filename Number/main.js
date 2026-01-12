// Chal 1

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// 1: smallest num and return int

// console.log(parseInt(Math.min(a, b, c, d)));

// 2: use a, d to get the value 10000

// console.log(Math.pow(a, Math.floor(d)))

// 3: get int "2" from d variable four diff times

// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.trunc(2));
// console.log(parseInt(d.toFixed(0)));

// 4: Use b, d to get 66.67 ---> String || 67 ---> Number

// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2))    // 66.67
// console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));    // 67

// -------------------------------------------------------------------------------------------------

// Assignment 1

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
// console.log(1_00 * 1_000); // 100000
// console.log(1e5); // 100000
// console.log(1_000_000 / 10); // 100000
// console.log(1_000_000 - 9_00_000); // 100000
// console.log(2 * 5e4); // 100000
// console.log(1e6 / 1e1); // 100000
// console.log(50_000 + 50_000); // 100000
// console.log(Math.ceil(99999.8)); // 100000
// console.log(Math.floor(100000.2)); // 100000
// console.log(Math.trunc(100000.2)); // 100000

// -------------------------------------------------------------------------------------------------

// Assignment 2

// console.log(-Number.MIN_SAFE_INTEGER) // 9007199254740991

// -------------------------------------------------------------------------------------------------

// Assignment 3

// console.log(Number.MAX_SAFE_INTEGER.toString().length);    // 16

// -------------------------------------------------------------------------------------------------

// Assignment 4

// let myVar = "100.56789 Views";

// console.log(Math.floor(parseInt(myVar))); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// -------------------------------------------------------------------------------------------------

// Assignment 5

// let num = 10;

// console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

// -------------------------------------------------------------------------------------------------

// Assignment 6

// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Number(flt.toFixed(0))); // 10
// console.log(Math.ceil(--flt)); // 10

// -------------------------------------------------------------------------------------------------

// Assignment 7

// console.log(Math.floor(Math.random() * (4 - 0 + 1)) + 0); // 0 || 1 || 2 || 3 || 4
