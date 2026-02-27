let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

names.forEach((ele) => {
  if (ele.charAt(0).toLowerCase() === ele.at(-1).toLowerCase()) {
    result.push(ele);
  }
});

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
