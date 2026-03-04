let arr = [1, 1, 1, 2, 3, 4, 3];

// // Method 1
// let uniqueElements = new Set(arr);
// uniqueElements = Array.from(uniqueElements);

// console.log(uniqueElements); // [1, 2, 3, 4]

// -------------------------------------------------------------------------------------------------

// // Method 2
// let uniqueElements = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueElements.includes(arr[i])) {
//     uniqueElements.push(arr[i]);
//   }
// }

// console.log(uniqueElements); // [1, 2, 3, 4]

// -------------------------------------------------------------------------------------------------

// // Method 3
// let someArr = [];
// let uniqueElements = arr.map((ele) => {
//   if (!someArr.includes(ele)) {
//     someArr.push(ele);
//     return ele;
//   }
// });

// console.log(someArr); // [1, 2, 3, 4]

// -------------------------------------------------------------------------------------------------

// // Method 4
let uniqueElements = arr.filter((ele, index) => {
  return arr.indexOf(ele) === index;
});

console.log(uniqueElements); // [1, 2, 3, 4]
