// Challenge

// let theName = "Elzero Web School";

// 1: Use slice(), charAt() -----------------------------------------------------------------------------------> Done
// console.log(`${theName.charAt(2).toUpperCase()}${theName.slice(3, 6)}`); // Zero

// 2: ------------------------------------------------------------------------------------------------------> Done
// console.log(theName.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// 3: ------------------------------------------------------------------------------------------------------> Done
// console.log(theName.slice(0, 6).split()); // [Elzero]

// 4: ------------------------------------------------------------------------------------------------------> Done
// console.log(`${theName.substring(0, 6)} ${theName.substring(11)}`); // Elzero School

// 5: make the solution dynamic ------------------------------------------------------------------------> Done
// console.log(
//   `${theName.charAt(0).toLocaleLowerCase()}${theName
//     .substring(1, theName.length - 1)
//     .toUpperCase()}${theName.charAt(theName.length - 1)}`
// ); // eLZERO WEB SCHOOl

// ---------------------------------------------------------------------------------------------------------------------

// Assignment 1

// let userName = "Elzero";
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.split("")[0].toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase().repeat(3)); // eee

// ---------------------------------------------------------------------------------------------------------------------

// Assignment 2

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.toUpperCase().includes(letterZ.toUpperCase())); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True
