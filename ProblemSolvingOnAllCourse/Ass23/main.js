function reversing(str) {
  let matchArr = str.match(/(?<!\w)\w+(?!\w)/gi);

  let newArr = matchArr.map((ele) => {
    ele = ele.split("").reverse();
    return ele;
  });

  let i = 0;
  str = str.replace(/(?<!\w)\w+(?!\w)/gi, () => {
    return newArr[i++].join("");
  });

  return str;
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
