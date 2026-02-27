function concatenateWithoutLast(words) {
  return words.map((ele) => (ele = ele.slice(0, -1))).join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School
