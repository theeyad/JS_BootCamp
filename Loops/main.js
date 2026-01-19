// Challenge 1

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Anwar",
//   "Sameh",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Omnia",
// ];

// adminsNumLoop: for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i].toLowerCase() === "stop") {
//     break adminsNumLoop;
//   }
//   adminsNum = i + 1;
// }

// document.writeln(`<h1>We Have ${adminsNum} Admins</h1>`);
// document.writeln(`<hr>`);

// for (let i = 0; i < adminsNum; i++) {
//   document.writeln(`<div>`);
//   document.writeln(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.writeln(`<h3>Team Members: </h3>`);
//   let k = 1;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (
//       myEmployees[j]
//         .toLowerCase()
//         .startsWith(myAdmins[i].toLowerCase().charAt(0))
//     ) {
//       document.writeln(`<p>- ${k} ${myEmployees[j]}</p>`);
//       k++;
//     }
//   }
//   document.writeln(`</div>`);
//   document.writeln(`<hr>`);
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; (i += 10)) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 2

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >= 0; i--) {
//   if (i === 3) {
//     console.log(`${end}${i}`);
//     break;
//   } else if (i < 10) {
//     console.log(`${end}${i}`);
//   } else {
//     console.log(i);
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = breaker; j <= breaker * breaker; j += breaker) {
//     console.log(`-- ${j}`);
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 4

// let index = 10;
// let jump = 2;

// for (let i = index; i >= jump * jump; i -= jump) {
//   console.log(i);
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let j = +true;
// for (let i = +false; i < friends.length; i++) {
//   if (friends[i][+false].toLowerCase() === letter) {
//     continue;
//   } else {
//     console.log(`${j} => ${friends[i]}`);
//     j++;
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 6

// let start = 0;
// let swappedName = "elZerO";

// let newSwappedName = [];

// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toLowerCase()) {
//     newSwappedName.push(swappedName[i].toUpperCase());
//   } else if (swappedName[i] === swappedName[i].toUpperCase()) {
//     newSwappedName.push(swappedName[i].toLowerCase());
//   }
// }

// console.log(newSwappedName.join(""));

// ------------------------------------------------------------------------------------------------------------------

// Assignment 7

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++) {
//   if (typeof mix[i] === "string" || mix[i] === +true) {
//     continue;
//   } else {
//     console.log(mix[i]);
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Assignment 8

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (
    typeof friends[index] === "number" ||
    friends[index].charAt(+false).toLowerCase() === "a"
  ) {
    index++;
    continue;
  } else {
    console.log(`${counter + true} => ${friends[index]}`);
    index++;
    counter++;
  }
}