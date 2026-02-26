function checkRange(n1, n2, n3, n4, n5) {
  let args = Array.from(arguments).filter((ele) => n5 >= ele && ele >= n4);
  return args.length !== 5
    ? "Not All Numbers Is In Range"
    : "Yes All Numbers In Range";
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
