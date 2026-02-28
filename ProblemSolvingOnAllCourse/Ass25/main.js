let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// // 1
// let arr = [...myArr];
// for (let i = 0; i < arr.length; i++) {
//   myArr.pop();
// }

// // 2
// let arr = [...myArr];
// for (let i = 0; i < arr.length; i++) {
//   myArr.shift();
// }
// console.log(myArr);

// // 3
// myArr = myArr.filter((ele) => {
//   typeof ele !== "number";
// });
// console.log(myArr);

// // 4
console.log(myArr);
let mySet = new Set(myArr);
mySet.clear()
console.log([...mySet]);
