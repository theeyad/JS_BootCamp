let nums = [10, -20, 300, 50, 100, -50];

// // Method 1
// console.log(Math.max(...nums));

// -----------------------------------------------------------------------------------------------------

// // Method 2

// let max = nums.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// });

// console.log(max)

// -----------------------------------------------------------------------------------------------------

// // Mehtod 3

// // making a copy of the array of nums
// let max = [...nums];

// // looping over array of nums
// for (let i = 0; i < nums.length; i++) {
//   // getting element one by one
//   let element = nums[i];
//   // loopin again on array of nums
//   for (let j = 0; j < nums.length; j++) {
//     // comparing element with all array of nums element to check if it's smaller than any of them
//     if (element < nums[j]) {
//       // removing the element from max if it's smaller and breaking so we do not furthur compare
//       max = max.filter((ele) => ele !== element);
//       break;
//     } else {
//       continue;
//     }
//   }
// }

// // only one element remains so we get it
// console.log(max[0]);

// -----------------------------------------------------------------------------------------------------

// // Method 4

// nverting every element (+ becomes - and vice versa)
let inverted = nums.map((ele) => -ele);

// getting the biggest (-) value and inverting it so it returns to its origin
let max = -Math.min(...inverted);

console.log(max);
