let st = "elzero";

// 1
console.log(st[0].toUpperCase() + st.slice(1));

// 2
console.log(st.charAt(0).toUpperCase() + st.slice(1));

// 3
console.log(st.at(0).toUpperCase() + st.slice(1));

// 4
console.log(st[0].toUpperCase() + st.substring(1));

// 5
console.log(st.charAt(0).toUpperCase() + st.substring(1));

// 6
console.log(st.at(0).toUpperCase() + st.substring(1));

// 7
console.log(
  st.replace(/\b(\w)/g, (group) => {
    return group.toUpperCase();
  }),
);

// 8
console.log(st.slice(1).padStart(st.length, st[0].toUpperCase()));
