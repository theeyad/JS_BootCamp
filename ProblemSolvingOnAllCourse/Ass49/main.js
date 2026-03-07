// // Mehtod 1 (overcomplicated)
// function createStars(num) {
//   let numOfStars = 1;
//   let arr = [];

//   for (let i = 0; i < num; i++) {
//     arr.push("*".repeat(numOfStars));
//     numOfStars += 2;
//   }

//   let arrToCompre = [...arr];

//   numOfStars -= 2;
//   for (let i = arrToCompre.length; i > 1; i--) {
//     numOfStars -= 2;
//     arr.push("*".repeat(numOfStars));
//   }

//   return arr.join("\n");
// }

// console.log(createStars(3));

// console.log(createStars(7));

// -----------------------------------------------------------------------------------------------------

// // Mehtod 2

function createStars(num) {
  let result = "";
  let numOfRows = num * 2 - 1;
  for (let i = 0; i < numOfRows; i++) {
    let stars = i < num ? 1 + i : numOfRows - i;
    result += "*".repeat(stars * 2 - 1) + "\n";
  }

  return result;
}

console.log(createStars(3));

console.log(createStars(7));
