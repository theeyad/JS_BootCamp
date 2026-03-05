let str = "i lovE elzeRO weB schOOL";

let strArr = str.split(" ");
let loweredStrArr = strArr.map((ele) => ele.toLowerCase());

let capitalize = loweredStrArr.map(
  (ele) => `${ele[0].toUpperCase()}${ele.slice(1)}`,
);

let newStr = capitalize.join(" ");

console.log(newStr);
