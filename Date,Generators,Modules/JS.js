// Assignment 1

// let date = new Date(); // Object (String shaped) containing date of birth and time and UTC and time zone
// let myBirthday = new Date(2005, 5, 26); // Object (String shaped) containing date of birth and time and UTC and time zone

// let myDate = date - myBirthday; // diffrence in ms

// console.log(`${myDate / 1000} Seconds`);
// console.log(`${myDate / 1000 / 60} Minutes`);
// console.log(`${myDate / 1000 / 60 / 60} Hours`);
// console.log(`${myDate / 1000 / 60 / 60 / 24} Days`);
// console.log(`${myDate / 1000 / 60 / 60 / 24 / 30} Months`);
// console.log(`${myDate / 1000 / 60 / 60 / 24 / 30 / 12} Years`);

// -------------------------------------------------------------------------------------------------------

// Assignment 2

// let date = new Date();
// date.setFullYear(1980, 0, 1);
// date.setHours(0, 0, 1);

// console.log(date);

//   "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// -------------------------------------------------------------------------------------------------------

// Assignment 3

// let date = new Date();
// date.setDate(0); // sets the date to the last day of the previous month (year and time are affected too)

// console.log(date);

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(
//   `Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}`, // gets the month index and gets the day of the month
// );

// -------------------------------------------------------------------------------------------------------

// Assignment 4

// let myBirthday = new Date("2005-06-26T00:00:00");
// let myBirthday2 = new Date(2005, 5, 26, 0, 0, 0);
// let myBirthday3 = new Date(Date.parse("2005-06-26T00:00:00"));

// console.log(myBirthday);
// console.log(myBirthday2);
// console.log(myBirthday3);

// -------------------------------------------------------------------------------------------------------

// Assignment 5

// let start = performance.now();

// for (let i = 0; i <= 99999; i++) {
//   console.log(i);
// }

// let end = performance.now();

// let logPerf = end - start;

// console.log(`Loop Took ${logPerf.toFixed(0)} Milleseconds`);

// -------------------------------------------------------------------------------------------------------

// Assignment 6

// function* gen() {
//   let start = 1;

//   while (true) {
//     yield 100 * start ** 2 - 160 * start + 74;
//     start++;
//   }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// -------------------------------------------------------------------------------------------------------

// Assignment 7

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }

// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* new Set(genLetters());
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

// -------------------------------------------------------------------------------------------------------

// Assignment 8

// import calc from "./mod-one.js";
// import * as modOne from "./mod-two.js";

// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
