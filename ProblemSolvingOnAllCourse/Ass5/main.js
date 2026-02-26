// // Normal
// function replaceFirstWithLast(word) {
//   let wordArr = word.split("");
//   let firstChar = wordArr.pop();
//   let lastChar = wordArr.shift();
//   wordArr.unshift(firstChar);
//   wordArr.push(lastChar);
//   return wordArr.join("");
// }

// // High
function replaceFirstWithLast(word) {
  return word.at(-1) + word.slice(1, -1) + word.at(0);
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oellH
