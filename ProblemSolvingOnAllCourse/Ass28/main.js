function customMerge(...ars) {
  let newArr = [];
  for (let i = 0; i < ars.length; i++) {
    for (let j = 0; j < ars[i].length; j++) {
      newArr.push(Number(ars[i][j]));
    }
  }

  return newArr.sort((a, b) => a - b);
}

console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]),
);
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
