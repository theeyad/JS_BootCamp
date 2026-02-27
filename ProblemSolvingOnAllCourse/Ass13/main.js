let theName = "Elzero";

console.log(theName.charAt(0) + theName.at(-1)); // Line 1 => Eo

console.log(theName.slice(1, -1)); // Line 2 => lzer

// Line 3 => ze
if (theName.length % 2 === 0) {
  // num of parts of the word (length = 6, parts = 3)
  let partsNum = theName.length / 2;
  console.log(theName.slice(partsNum - 1, partsNum + 1));
} else {
  // there's a single char to slice (length = 7, char = ((7 - 1) / 2))
  let charToSlice = (theName.length - 1) / 2;
  console.log(theName.slice(charToSlice, charToSlice + 1));
}
