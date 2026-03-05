// // Mehtod 1
// let smallLetters = "";

// for (let i = 97; i < 123; i++) {
//   smallLetters += String.fromCharCode(i);
// }

// console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

// --------------------------------------------------------------------------------------------------------

// // Mehtod 2 (better to use String.fromCodePoint())
let smallLetters = "";

for (let i = 97; i < 123; i++) {
  smallLetters += String.fromCodePoint(i);
}

console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz
