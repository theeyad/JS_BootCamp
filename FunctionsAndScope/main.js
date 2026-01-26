// Challenge 1

// let names = function (...names) {
//   return `String [${names.join("], [")}] => Done !`;
// };

// let names = (...names) => `String [${names.join("], [")}] => Done !`;

// console.log(names("Eyad", "Othman", "Muhammed", "Othman")); // String [Eyad], [Othman], [Muhammed], [Othman] => Done !

// --------------------------------------------------------------------------------------------------

// Challenge 2

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one * two - (nums[nums.length - true] + nums[nums.length - (true + true)] + one);

// let calc = function (one, two, ...nums) {
//   return (
//     one * two -
//     (nums[nums.length - true] + nums[nums.length - (true + true)] + one)
//   );
// };

// console.log(calc(10, 20, 50, 60)); // 80

// --------------------------------------------------------------------------------------------------

// Assignmnent 1

// function getDetails(zName, zAge, zCountry) {
//   function namePattern() {
//     zName = zName.split(" ");
//     return `${zName[0]} ${zName[1].charAt(0).toUpperCase()}.`;
//   }
//   function ageWithMessage() {
//     zAge = zAge.split(" ");
//     return `Your Age Is ${zAge[0]}`;
//   }
//   function countryTwoLetters() {
//     return `${zCountry.slice(0, 2).toUpperCase()}`;
//   }
//   function fullDetails() {
//     return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}.`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG.

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY.

// console.log(getDetails("Eyad Othman", "20 Is The Age", "Egypt"));
// // Hello Eyad O., Your Age Is 20, You Live In EG.

// --------------------------------------------------------------------------------------------------

// Assignmnent 2

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

// let itsMe = () => `Iam An Arrow Function`;

// console.log(itsMe()); // Iam An Arrow Function

// -----------------------------------------------------------

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// --------------------------------------------------------------------------------------------------

// Assignmnent 3

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

// let checker = (zName) => (status) => (salary) =>
//   status === "Available"
//     ? `${zName}, My Salary Is ${salary}`
//     : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// console.log(checker("Eyad")("Available")(3000)) // Eyad, My Salary Is 3000

// --------------------------------------------------------------------------------------------------

// Assignmnent 4

// function specialMix(...data) {
//   let sum = 0;

//   for (let i = 0; i < data.length; i++) {
//     // If The Argument Is A Number
//     if (typeof data[i] === "number") {
//       sum += data[i];
//     }

//     // If The Argument Is A String But Starts With A Number
//     else if (
//       typeof data[i] === "string" &&
//       Number.isInteger(parseInt(data[i][0]))
//     ) {
//       sum += parseInt(data[i]);
//     }

//     // If The Argument Is A String Only
//     else if (
//       typeof data[i] === "string" &&
//       !Number.isInteger(parseInt(data[i][0]))
//     ) {
//       continue;
//     }
//   }

//   return sum === 0 ? `All Is Strings` : sum;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("0Testing", "10Testing", "Cool")); // 10
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
