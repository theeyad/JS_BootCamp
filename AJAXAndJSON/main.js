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
