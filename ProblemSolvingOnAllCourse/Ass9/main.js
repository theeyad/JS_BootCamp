function swapEveryTwoChars(word) {
  let swappedWord = Array.from(word).map((ele, index) => {
    if (index % 2 === 0) {
      if (ele === ele.toLowerCase()) {
        return ele.toUpperCase();
      } else {
        return ele.toLowerCase();
      }
    } else {
      return ele;
    }
  });

  return swappedWord.join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
console.log(swapEveryTwoChars("eyaD")); // EyAD
