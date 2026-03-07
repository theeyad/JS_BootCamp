function createStars(num) {
  let numOfStars = 1;
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("*".repeat(numOfStars));
    numOfStars += 2;
  }

  return arr.join("\n")
}

console.log(createStars(8));

