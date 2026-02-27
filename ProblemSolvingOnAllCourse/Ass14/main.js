// // Normal
// function repeatWithRules(word) {
//   let arrOfWords = Array.from(word);
//   for (let i = 0; i < word.length; i++) {
//     let chars = word[i].repeat(i);
//     arrOfWords.splice(i * 2 + 1, 0, chars);
//   }
//   return arrOfWords.join("");
// }

// // High
function repeatWithRules(word) {
  let arr = [...word].map((char, i) => {
    return char.repeat(i + 1);
  });

  return arr.join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
