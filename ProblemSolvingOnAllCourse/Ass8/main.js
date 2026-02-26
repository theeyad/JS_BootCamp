let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

let subNumsArr = nums.map((ele) => Math.abs(goal - ele));

let minNum = Math.min(...subNumsArr);
let index = subNumsArr.indexOf(minNum);

let closestNum = nums[index];

console.log(closestNum);

// Closest Number Is 88
