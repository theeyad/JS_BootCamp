function customCalc(...params) {
  let arrOfNums = params
    .filter((ele) => !Number.isNaN(Number(ele)))
    .map((ele) => Number(ele));

  let result = arrOfNums.reduce((acc, curr) => {
    return acc + curr;
  });

  return result * arrOfNums[0] * arrOfNums.at(-1);
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
