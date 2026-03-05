// setting the serial length
let serialLength = 20;

// empty serial
let serial = [];

// lowercase chars
let lowerCaseAlphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// uppercase chars
let upperCaseAlphabetArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// making the serial
for (let i = 0; i < serialLength; i++) {
  // making random digit form 0-9
  let randomNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

  // making random lowercase char from a-z
  let randomLowerAlphabetNum = Math.floor(Math.random() * (25 - 0 + 1)) + 0;

  let randomLowerCaseAlphabet = lowerCaseAlphabetArr[randomLowerAlphabetNum];

  // making random uppercase char from A-Z
  let randomUpperAlphabetNum = Math.floor(Math.random() * (25 - 0 + 1)) + 0;

  let randomUpperCaseAlphabet = upperCaseAlphabetArr[randomUpperAlphabetNum];

  // put random digit and lower and upper in arr
  let threeRandoms = [
    randomNum,
    randomLowerCaseAlphabet,
    randomUpperCaseAlphabet,
  ];

  // pushing to serial
  serial.push(threeRandoms[Math.floor(Math.random() * (2 - 0 + 1)) + 0]);
}

console.log(serial.join(""));
