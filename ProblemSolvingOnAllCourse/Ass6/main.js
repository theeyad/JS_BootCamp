// // one way
// function checkBiggestNum(word) {
//   return Math.max(...Array.from(word));
// }

// // another way
function checkBiggestNum(word) {
  return Math.max(...word.split(""));
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
