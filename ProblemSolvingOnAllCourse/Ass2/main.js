// // Normal
// function addEl(str) {
//   if (
//     str === "" ||
//     `${str.charAt(0).toLowerCase()}${str.charAt(1).toLowerCase()}` === "el"
//   ) {
//     return str;
//   } else {
//     return `El${str}`;
//   }
// }

// // High
// function addEl(str) {
//   return str === "" ||
//     `${str.charAt(0).toLowerCase()}${str.charAt(1).toLowerCase()}` === "el"
//     ? str
//     : `El${str}`;
// }

// // Higher
function addEl(str) {
  return str === "" || str.toLowerCase().startsWith("el") ? str : `El${str}`;
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
console.log(addEl("Ezero")); // ElEzero
console.log(addEl("Lzero")); // ElLzero
console.log(addEl("lzero")); // Ellzero
console.log(addEl("ezero")); // Elezero
console.log(addEl("eyad")); // Eleyad
