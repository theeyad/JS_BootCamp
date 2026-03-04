let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];

console.log(clonedArray); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 2
let clonedArray2 = Array.from(myArray);

console.log(clonedArray2); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 3
let clonedArray3 = myArray.copyWithin(0, 0, myArray.length - 1);

console.log(clonedArray3); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 4
let clonedArray4 = myArray.map((ele) => ele);

console.log(clonedArray4); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 5
let clonedArray5 = myArray.filter((ele) => ele);

console.log(clonedArray5); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 6
let clonedArray6 = [];

for (let i = 0; i < myArray.length; i++) {
  clonedArray6.push(myArray[i]);
}

console.log(clonedArray6); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 7
let clonedArray7 = Array.of(...myArray);

console.log(clonedArray7); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 8
let clonedArray8 = [];

for (let i = 0; i < myArray.length; i++) {
  clonedArray8.unshift(myArray[i]);
}

console.log(clonedArray8); // [100, 200, 300, 400]

// ------------------------------------------------------------------------------------------------------

// Method 9
let clonedArray9 = myArray.slice(0);

console.log(clonedArray9); // [100, 200, 300, 400]
