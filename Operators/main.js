// chal 1

// // Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// -------------------------------------------------------------------

// chal 2

let num = 3;

// Solution One
console.log(--num * ++num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num++ + --num); // 6

// Soultion Four
console.log(num-- + ++num); // 6

// Solution Five
console.log(num + num); // 6

// Solution Six
console.log(num-- * num); // 6

// -------------------------------------------------------------------

// chal 3

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(+num1++ + --num1); // 20

// Solution Three
console.log(+num1-- + ++num1); // 20

// Solution Four
console.log(Number(`${+num1 + +num1}`)); // 20

// -------------------------------------------------------------------

// chal 4

let points = 10;

points = ++points + ++points + ++points - --points - --points;

console.log(points); // 13

points = points + --points + --points + --points - ++points - --points - --points - --points;

console.log(points); // 8;
