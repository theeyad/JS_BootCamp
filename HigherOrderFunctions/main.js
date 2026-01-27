// Challenge

/*
Higher Order Functions Challenges

You Can Use
- ,
- _
- Space
- True => 1 => One Time Only In The Code

You Cannot Use
- Numbers
- Letters

- You Must Use [Filter + Map + Reduce + Your Knowledge]
- Order Is Not Important
- All In One Chain

*/

// My Answer Where I Used 2 * true instead of one

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// console.log(myString.split(""));

// let solution = myString
//   .split("")
//   .filter(
//     (ele) =>
//       !Number.isInteger(parseInt(ele)) &&
//       ele !== "," &&
//       ele !== myString[myString.length - true],
//   )
//   .map((ele) => (ele !== "_" ? ele : " "))
//   .slice(true)
//   .reduce((acc, current) => acc + current);

// console.log(solution); // Elzero Web School

// -------------------------------------------------------------------

// The Answer According to the challenge

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// console.log(myString.split(""));

// let solution = myString
//   .split("")
//   .filter(
//     (ele) =>
//       !Number.isInteger(parseInt(ele)) &&
//       ele !== "," &&
//       ele !== myString[myString.length - true],
//   )
//   .map((ele) => (ele !== "_" ? ele : " "))
//   .reduce((acc, current) => (acc === current ? current : acc + current));

// console.log(solution); // Elzero Web School

// ---------------------------------------------------------------------------------------------------------------

// Assignmnet 1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let unMix = mix
//   .map((ele) => {
//     return Number.isNaN(parseInt(ele)) ? ele : "";
//   })
//   .reduce((acc, current) => {
//     return acc + current;
//   });

// console.log(unMix);

// Output Is: Elzero

// ---------------------------------------------------------------------------------------------------------------

// Assignmnet 2

// let myString = "EElllzzzzzzzeroo";

// let newString = myString.split("").reduce((acc, cur) => {
//   return acc[acc.length - 1] === cur ? acc : acc + cur;
// });

// console.log(newString);

// Output Is: Elzero

// ---------------------------------------------------------------------------------------------------------------

// Assignmnet 3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// newArray = myArray.reduce((acc, cur, ind, arr) => {
//   return !Array.isArray(cur) ? acc + cur : acc + cur.join("");
// }, "");

// console.log(newArray);

// Output Is: Elzero

// ---------------------------------------------------------------------------------------------------------------

// Assignmnet 4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let invertedNums = numsAndStrings
//   .filter((ele) => !Number.isNaN(parseInt(ele)))
//   .map((ele) => -ele);

// console.log(invertedNums);

// Output Is: [-1, -10, 10, 20, -5, -3]

// ---------------------------------------------------------------------------------------------------------------

// Assignmnet 5

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let output = nums.reduce((acc, cur) => {
//   return cur % 2 !== 0 ? acc + cur : acc * cur;
// }, 1);

// console.log(output);

// 500
