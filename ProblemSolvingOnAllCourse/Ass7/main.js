// Normal
let nums = [20, 100, 50, 10, 15, -20, 30];

let maxValue = nums.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

nums = nums.filter((ele) => ele !== maxValue);

let secondMaxValue = nums.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log([maxValue, secondMaxValue]);
