function createStars(num) {
  let result = "";
  let stars = num * 2 - 1;
  for (let i = 0; i < num; i++) {
    result += " ".repeat(i) + "*".repeat(stars) + " ".repeat(i) + "\n";
    stars -= 2;
  }

  stars = 1;
  for (let i = num - 1; i >= 0; i--) {
    result += " ".repeat(i) + "*".repeat(stars) + " ".repeat(i) + "\n";
    stars += 2;
  }

  return result;
}

console.log(createStars(3));

console.log(createStars(6));

console.log(createStars(10));
