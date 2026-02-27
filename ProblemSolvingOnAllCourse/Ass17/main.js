function formatName(theName) {
  let arr = theName.split(" ").map((ele) => ele.charAt(0));

  return arr
    .map((ele) => {
      if (arr[0] === ele) {
        ele = ele.toUpperCase();
      } else {
        ele = ele.toLowerCase();
      }
      return ele;
    })
    .join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
console.log(formatName("eyad othman Muhamed")); // E.o.m
