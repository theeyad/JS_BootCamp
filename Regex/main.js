/*
  Regular Expression
  - Challenge
*/

// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// let re = /(https?\:\/\/)?(www\.)?\w+\.org(.+)?/gi;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

// ---------------------------------------------------------------------------------------------------------

// Assignmnet 1

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let regex = /\d+\:\w+\d+(\:\d+){6}/gi;

// console.log(ip.match(regex));

// ---------------------------------------------------------------------------------------------------------

// Assignmnet 2

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let regex = /\bOs(\d+)?O\b/gi;

// console.log(specialNames.match(regex));

// Output
// ['Os10O', 'OsO', 'Os100O']

// ---------------------------------------------------------------------------------------------------------

// Assignmnet 3

// let phone = "+(995)-123 (4567)";

// let regex = /\+\(\d+\)\-\d+\s\(\d+\)/g;

// console.log(phone.match(regex));

// ---------------------------------------------------------------------------------------------------------

// Assignmnet 4

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? ---> matches http and s may or may not exist

// : ---> matches :

// \/\/ ---> matches //

// (?:[-\w]+\.)? --->
////  () ---> capture so we use ?: to tell regex to not capture
////  [-\w]+ ---> we match - and any word character (a-z, A-Z, 0-9, _) at the same time and all this can exist one or more times
////  \. ---> matches .
////  ? ---> all of this can exist or not

// ([-\w]+) ---> capture matching - or word characters that may exist one or more times

// \. ---> matches .

// \w+ ---> word character that may exist ine or more times

// (?:\.\w+)? --> do not capture what matches . then word character (one time or more) and all that may or may not exist

// \/? ---> matches / that may or may not exist

// .* ---> matches anything that may exist zero or more times

// ---------------------------------------------------------------------------------------------------------

// Assignmnet 5

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d+[\s/](?:-\s)?\d+\s?(?:-)?[\s/]\d+/g;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
