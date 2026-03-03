let myArr = ["69", "108", "122", "101", "114", "111"];

// let result = "";
// for (let i = 0; i < myArr.length; i++) {
//   result += String.fromCharCode(myArr[i]);
// }

let result = myArr.reduce((acc, curr) => {
  return acc + String.fromCharCode(curr);
}, "");

console.log(result); // Elzero
