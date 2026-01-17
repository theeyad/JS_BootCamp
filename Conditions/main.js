// challenge 1

// let a = 10;

// if (a > 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// a > 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

// --------------------------------------------------------------------------------------------------------------

// challenge 2

// let st = "Elzero Web School";

// if (`${st.indexOf("e")}${st.indexOf("r")}` === "34") {
//   console.log("Good");
// }

// // w position may change
// if (st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
//   console.log("Good");
// }

// if (parseInt(st.indexOf("E")) !== "string") {
//   console.log("Good");
// }

// if (`${typeof parseInt(st.indexOf("E"))}` === "number") {
//   console.log("Good");
// }

// if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// --------------------------------------------------------------------------------------------------------------

// Challenge 3

// let job = "Manager";
// let salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(`Salary Is ${salary}`);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(`Salary Is ${salary}`);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(`Salary Is ${salary}`);
//     break;
//   default:
//     salary = 4000;
//     console.log(`Salary Is ${salary}`);
// }

// --------------------------------------------------------------------------------------------------------------

// Challenge 4

// let holidays = 0;
// let money = null;

// if (holidays === 0) {
//   money = 5000;
//   console.log(`Money Is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`Money Is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`Money Is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`Money Is ${money}`);
// } else if (holidays === 5) {
//   money = 0;
//   console.log(`Money Is ${money}`);
// } else {
//   console.log(`Money Is ${money ?? 2000}`);
// }

// --------------------------------------------------------------------------------------------------------------

// Assignment 1

// // Test Case 1
// let num = 9; // "009"

// // Test Case 2
// // let num = 20; // "020"

// // Test Case 3
// // let num = 110; // "110"

// if (num < 10) {
//   console.log(`00${num}`);
// } else if (100 > num && num >= 10) {
//   console.log(`0${num}`);
// } else {
//   console.log(`${num}`);
// }

// --------------------------------------------------------------------------------------------------------------

// Assignment 2

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }
// if (num1 == str && typeof num1 !== typeof str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if (num1 != str2 || typeof num1 === typeof str2) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }
// if (typeof str === typeof str2 && str != str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }

// --------------------------------------------------------------------------------------------------------------

// Assignment 3

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// if (+num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num2}`
//   );
// } else if (+num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`
//   );
// } else if (
//   num3 != num1 &&
//   typeof num3 !== typeof num1 &&
//   typeof num3 !== typeof num2
// ) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   );
// }

// --------------------------------------------------------------------------------------------------------------

// Assignment 4

// Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// --------------------------------------------------------------------------------------------------------------

// Assignment 5

// let day = "   tuesday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"

// switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;
//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;
//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;
//   default:
//     console.log("Its Not A Valid Day");
// }
