String.prototype.elzeroRepeat = function (numOfRepeats) {
  let arr = [];
  for (let i = 0; i < numOfRepeats; i++) {
    arr.push(this);
  }
  return arr.join("");
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero
console.log("Eyad".elzeroRepeat(5)); // Elzero Elzero Elzero
