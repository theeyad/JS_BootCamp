let str1 = "AElzero";
let str2 = "ZAcademy";

let str1Arr = str1.split("");
str1Arr.shift();

let str2Arr = str2.split("");
str2Arr.shift();

console.log(`${str1Arr.join("")} ${str2Arr.join("")}`); // Elzero Academy
