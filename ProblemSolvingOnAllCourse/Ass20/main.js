let st = "Elzero";

// 1
console.log(st.at(-1));

// 2
console.log(st.slice(-1));

// 3
console.log(st.charAt(st.length - 1));

// 4
console.log(st.slice(st.length - 1));

// 5
console.log(
  [...st]
    .filter((ele) => {
      return ele === st.at(-1);
    })
    .join(""),
);

// 6
console.log(
  [...st].find((ele) => {
    return ele === st.at(-1);
  }),
);

// 7
console.log(
  [...st].filter((ele) => {
    return ele === st.at(-1);
  }).at(-1)
);
