const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// // Method 1

// let copiedData = {...myData};
// console.log(copiedData);

// -------------------------------------------------------------------------------------------------------

// // Method 2

// let copiedData = Object.assign(myData);
// console.log(copiedData);

// -------------------------------------------------------------------------------------------------------

// // Method 3

// let copiedData = Object.fromEntries(Object.entries(myData));
// console.log(copiedData);

// -------------------------------------------------------------------------------------------------------

// // Method 4

let keys = Object.keys(myData);
let vals = Object.values(myData);

let copiedData = {};

for (let i = 0; i < keys.length; i++) {
  copiedData[keys[i]] = vals[i];
}

console.log(copiedData)