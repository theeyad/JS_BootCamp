// Synchronis => one by one, no skipping

// ASynchronis => all in parallel

// JS is single threaded language

// ---------------------------------------------------------------------------------------------------------

// call Stack => manges all synchronies tasks

// Web API => contains sync and Async like setTimeOut(), Document, Console (sync)

// Call back => what returns from Async tasks

// Event Loop => what manages execution of everything (callStack, callBack, Task Queue, MicroTask Queue) and it
//                  wathces the callStack so if nothing in it it begins executing Async [MicroTask the Task]

// ---------------------------------------------------------------------------------------------------------

// AJAX (Asynchronis and JavaScript XML)

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();

// console.log(myRequest);

// readystate =>
// [0] req not initialized
// [1] server connection established
// [2] req recieved
// [3] processing req
// [4] req is finished and respons is ready (check status to see if found (200), forbiden (403), not found (404))

// ------------------------------------------------------------------------------------------------------------

// real life example

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();

// myRequest.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let jsData = JSON.parse(this.responseText);

//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.append(repoName);
//       document.body.append(div);
//     }
//   }
// });

// -----------------------------------------------------------------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//   let connection = true;
//   if (connection) {
//     resolve("yes");
//   } else {
//     reject(Error("No"));
//   }
// })
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//   })
//   .catch((rejectedValue) => {
//     console.log(rejectedValue);
//   }).finally(() => {
//       console.log("COOOOOOOOLLLL!!")
//   })

// ---------------------------------------------------------------------------------------------------

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((res) => {
//     let myData = res.json();
//     return myData;
//   })
//   .then((myData) => {
//     for (let i = 0; i < myData.length; i++) {
//       console.log(myData[i].name);
//     }
//   });

// ---------------------------------------------------------------------------------------------------

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First Promise");
//   }, 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Second Promise");
//   }, 3000);
// });

// const thirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Third Promise");
//   }, 2000);
// });

// // all return all promises (in array) if all resolved and if any rejected returns only the (first to happen) rejected value
// Promise.all([firstPromise, secondPromise, thirdPromise])
//   .then((resValues) => {
//     console.log(resValues);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// // allSettled return all promises if all resolved or if rejected (in array of objects)
// Promise.allSettled([firstPromise, secondPromise, thirdPromise])
//   .then((resValues) => {
//     console.log(resValues);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// // race returns the first to happen (res, rej, ....)
// Promise.race([firstPromise, secondPromise, thirdPromise])
//   .then((resValues) => {
//     console.log(resValues);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// ---------------------------------------------------------------------------------------------------

// // makes functions behave like promises

// async function getData() {
//   let arr = ["Eyad"];
//   if (arr.length > 0) {
//     return "Users";
//   } else {
//     throw Error("No Users");
//   }
// }

// getData()
//   .then((res) => console.log(res))
//   .catch((rej) => {
//     console.log(rej);
//   });

// // await only works in async functions and it makes JS wait for the promise and you do not need to .then, it gets the data directly

// ---------------------------------------------------------------------------------------------------

// async function readData() {
//   console.log("Before Fetch");
//   try {
//     let myData = await fetch(
//       "https://api.github.com/users/elzerowebschool/repos",
//     );
//     console.log(await myData.json());
//   } catch (reason) {
//     console.log("Error: " + reason);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// readData();
