let last = 30;

let arrOfNums = [];

// // get odd nums under last (get one and leave one)
for (let i = last; i > 0; i--) {
  if (!(i % 2 === 0)) {
    console.log(i);
    arrOfNums.push(i);
    i -= 3;
  } else {
    continue;
  }
}

// // sum all those nums
let sumOfNums = arrOfNums.reduce((acc, curr) => {
  return (acc += curr);
});

console.log(sumOfNums);
