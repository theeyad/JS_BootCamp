let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// // 1
// let mySet = new Set(myArr);
// console.log([...mySet]);

// // 2
// let filteredArr = [];
// for (let i = 0; i < myArr.length; i++) {
//   if (!filteredArr.includes(myArr[i])) {
//     filteredArr.push(myArr[i]);
//   }
// }
// console.log(filteredArr);

// // 3
// let filtered = myArr.filter((ele, indx) => {
//   return myArr.indexOf(ele) === indx
// });
// console.log(filtered)

// // 4
let filtered = myArr
  .map((ele, indx) => (myArr.indexOf(ele) === indx ? ele : null))
  .filter((ele) => ele !== null);
console.log(filtered);
