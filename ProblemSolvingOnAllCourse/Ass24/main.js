// // Normal
// function dashBetweenOdd(num) {
//   let str = num.toString();
//   let modStr = "";

//   for (let i = 0; i < str.length; i++) {
//     modStr += str[i];
//     if (str[i + 1]) {
//       if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
//         modStr += "-";
//       }
//     }
//   }

//   return modStr;
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// // High
// function dashBetweenOdd(num) {
//   let str = num.toString();
//   let modStr = [...str].map((ele, indx, arr) => {
//     if (arr[indx + 1]) {
//       if (ele % 2 !== 0 && arr[indx + 1] % 2 !== 0) {
//         return `${ele}-`;
//       } else {
//         return ele;
//       }
//     } else {
//       return ele;
//     }
//   });

//   return modStr.join("");
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// // Higher
function dashBetweenOdd(num) {
  return num.toString().replace(/([13579])(?=[13579])/g, "$1-");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
