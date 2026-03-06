let rangeEnd = 10;

// // Method 1
let rangeArr = [];

for (let i = 1; i <= rangeEnd; i++) {
  rangeArr.push(i);
}

console.log(rangeArr)

// ---------------------------------------------------------------------------------------------------

// // Method 2

// let rangeArr = Array.from({ length: rangeEnd }, (_, i) => {
//   return i + 1;
// });

// console.log(rangeArr);

// ---------------------------------------------------------------------------------------------------

// // Method 3

// let ranged = [...Array(rangeEnd).keys()].map((ele) => {
//   return ele + 1;
// });

// console.log(ranged);
