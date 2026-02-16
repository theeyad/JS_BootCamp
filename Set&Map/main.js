// Assignment 1: done

// let setOfNums = new Set([10]);
// setOfNums.add(20).add(2);
// console.log(setOfNums);
// console.log(Array.from(setOfNums).at(-1));

// --------------------------------------------------------------------------------------

// Assignment 2: done

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(new Set(myFriends.sort()));

// --------------------------------------------------------------------------------------

// Assignment 3: done

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let map = new Map(Object.entries(myInfo));

// console.log(map);
// console.log(map.size);
// console.log(map.has("role"));

// --------------------------------------------------------------------------------------

// Assignment 4: done

// let theNumber = 100020003000;

// console.log(
//   Number(
//     Array.from(new Set(`${theNumber}`))
//       .filter((ele) => ele > Math.min(...new Set(`${theNumber}`)))
//       .map((ele) => +ele)
//       .join(""),
//   ),
// );

// --------------------------------------------------------------------------------------

// Assignment 5: done

// let theName = "Elzero";

// // 1: done

// console.log(Array.from(theName));

// // 2: done

// console.log([...theName]);

// // 3: done

// let arr = [];

// arr.push(...theName);

// console.log(arr);

// // 4: done

// let arr2 = [];

// arr2.unshift(...theName);

// console.log(arr2);

// // 5: done

// console.log(theName.split(""));

// --------------------------------------------------------------------------------------

// Assignment 6: done

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// // getting numbers out of chars + its lenght
// let numOnlyChars = chars.filter((ele) => Number.isInteger(ele));
// let numOfNumOnlyChars = numOnlyChars.length;

// // getting string only out of chars
// let stringOnlyChars = chars.filter((ele) => !Number.isInteger(ele));

// // add nums to begining of chars
// stringOnlyChars.unshift(...numOnlyChars);

// // copyWithin()
// stringOnlyChars.copyWithin(0, numOfNumOnlyChars, numOfNumOnlyChars * 2);

// console.log(stringOnlyChars);

// --------------------------------------------------------------------------------------

// Assignment 7: done

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log([...numsOne, ...numsTwo]);
// console.log(numsOne.concat(numsTwo))
// console.log(Array.from([...numsOne, ...numsTwo]))

// --------------------------------------------------------------------------------------

// Assignment 8: done

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log([...n1, ...n2].length * Math.max(...n2));
