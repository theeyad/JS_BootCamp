let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

// Output Needed
// "Hello Elzero Web School @ We Love Programming"

console.log(myString.match(/[\w\s]+\s@\s[\w\s]+/gi).join(""));
