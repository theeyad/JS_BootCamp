// cha1lenge

// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// write code here

// console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]       -------> Done

// ---------------------------------------------------------

// console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]       -------> Done

// ---------------------------------------------------------

// let partOne = my[++zero].slice(--counter);
// let partTwo = my[counter].slice(--zero, counter);

// console.log(partTwo + partOne); // "Elzero"       -------> Done

// ---------------------------------------------------------

// let firstPart = my[++zero].charAt(++counter)
// let secondPart = my[zero].charAt(++counter).toUpperCase()

// console.log(firstPart + secondPart); // "rO"       -------> Done

// -------------------------------------------------------------------------------------------------------------------

// Assignment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// num -= num;

// console.log(myFriends.slice(num, myFriends.length - ++num)); // ["Ahmed", "Elham", "Osama"];

// ---------------------------------------------------------

// // Method 2
// myFriends.pop();

// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// -------------------------------------------------------------------------------------------------------------------

// Assignment 2

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here

// friends.shift()
// friends.pop()

// console.log(friends); // ["Eman", "Osama"]

// -------------------------------------------------------------------------------------------------------------------

// Assignment 3

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// finalArr = arrTwo.concat(arrOne).sort().reverse()

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// -------------------------------------------------------------------------------------------------------------------

// Assignment 4

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// -------------------------------------------------------------------------------------------------------------------

// Assignment 5

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// if (haystack.includes(needle)) {
//   console.log("Found");
// }

// if (haystack[1] === needle) {
//   console.log("Found");
// }

// if (haystack.join().includes(needle)) {
//   console.log("Found");
// }

// -------------------------------------------------------------------------------------------------------------------

// Assignment 6

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here

// allArrs = arr2
//   .concat(arr1.reverse())
//   .slice(arr1.length - true, arr1.length + (arr1.length - true) * true)
//   .sort()
//   .join("")
//   .toLowerCase();

// console.log(allArrs); // fxy