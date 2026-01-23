// Challenge

// function hr(...params) {
//   for (let i = 0; i < params.length; i++) {
//     typeof params[i] === "string"
//       ? (userName = params[i])
//       : typeof params[i] === "number"
//         ? (age = params[i])
//         : typeof params[i] === "boolean"
//           ? (hire = params[i])
//           : undefined;
//   }

//   hire == true
//     ? (hire = "You Are Available For Hire")
//     : (hire = "You Are Not Available For Hire");

//   console.log(`Hello ${userName}, Your Age Is ${age}, ${hire}`);
// }

// hr(true, 20, "Osama");
// hr("Osama", 20, true);
// hr(20, "Osama", true);
// hr(20, true, "Osama");
// hr(20, false, "Osama");

// ---------------------------------------------------------------------------------------------------------------

// Assignment 1

// function sayHello(theName, theGender) {
//   if (theGender === "Male") {
//     console.log(`Hello Mr ${theName}`);
//   } else if (theGender === "Female") {
//     console.log(`Hello Miss ${theName}`);
//   } else {
//     console.log(`Hello ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// ---------------------------------------------------------------------------------------------------------------

// Assignment 2

// function calculate(firstNum, secondNum, operation) {
//   if (secondNum === undefined) {
//     console.log("Second Number Not Found");
//   } else if (operation === undefined || operation === "add") {
//     console.log(firstNum + secondNum);
//   } else if (operation === "subtract") {
//     console.log(firstNum - secondNum);
//   } else if (operation === "multiply") {
//     console.log(firstNum * secondNum);
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

// ---------------------------------------------------------------------------------------------------------------

// Assignment 3

// function ageInTime(theAge) {
//   if (theAge > 100 || theAge < 10) {
//     console.log("Age Out Of Range");
//   } else {
//     let months = theAge * 12;
//     let weeks = theAge * 12 * 4;
//     let days = theAge * 12 * 4 * 7;
//     let hours = theAge * 12 * 4 * 7 * 24;
//     let minutes = theAge * 12 * 4 * 7 * 24 * 60;
//     let seconds = theAge * 12 * 4 * 7 * 24 * 60 * 60;

//     console.log(`${months} Months`);
//     console.log(`${weeks} Weeks`);
//     console.log(`${days} Days`);
//     console.log(`${hours} Hours`);
//     console.log(`${minutes} Minutes`);
//     console.log(`${seconds} Seconds`);
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// ---------------------------------------------------------------------------------------------------------------

// Assignment 4 Is Exactly The Challenge

// ---------------------------------------------------------------------------------------------------------------

// Assignment 5

// function createSelectBox(startYear, endYear) {
//   document.writeln(`<select>`);
//   for (let i = startYear; i <= endYear; i++) {
//     document.writeln(`<option value=${i}>${i}</option>`);
//   }
//   document.writeln(`</select>`);
// }

// createSelectBox(2005, 2026);

// ---------------------------------------------------------------------------------------------------------------

// Assignment 6

// function multiply(...numbers) {
//   let multiplied = 1;

//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === "string") {
//       continue;
//     } else if (!Number.isInteger(numbers[i])) {
//       numbers[i] = parseInt(numbers[i]);
//       multiplied = multiplied * numbers[i];
//     } else {
//       multiplied = multiplied * numbers[i];
//     }
//   }

//   console.log(multiplied);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
