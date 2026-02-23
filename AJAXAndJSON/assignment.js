// Assignment

// let req = new XMLHttpRequest(); // ---> starting my req
// req.open("GET", "articles.json"); // ---> attaching to real API (JSON file or real link)
// req.send(); // ---> sending the req (must do)

// // listening to ready state so when 4 (req finished and res is ready) and status 200 (OK) we get res
// req.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let res = req.responseText; // ---> getting the res
//     console.log(res);
//   }
// });

// // listening to req so when it ends (sucessfull or fail) we say "Data Loaded"
// req.addEventListener("loadend", function () {
//   console.log("Data Loaded");
// });

// ---------------------------------------------------------------------------------------------------

// Assignment

// let req = new XMLHttpRequest(); // ---> starting my req
// req.open("GET", "articles.json"); // ---> attaching to real API (JSON file or real link)
// req.send(); // ---> sending the req (must do)

// // listening to ready state so when 4 (req finished and res is ready) and status 200 (OK) we get res
// req.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let mainData = JSON.parse(req.responseText); // ---> getting the res

//     for (let i = 0; i < mainData.length; i++) {
//       // ---> looping over the array of objects (has length)
//       mainData[i]["section"] = "All"; // ---> changing data in "section" to "All" in all objects in the arr
//     }

//     console.log(mainData);

//     let updatedData = JSON.stringify(mainData); // ---> saving as JSON
//     console.log(updatedData);
//   }
// });

// ---------------------------------------------------------------------------------------------------

// Assignment

// let req = new XMLHttpRequest(); // ---> starting my req
// req.open("GET", "articles.json"); // ---> attaching to real API (JSON file or real link)
// req.send(); // ---> sending the req (must do)

// // listening to ready state so when 4 (req finished and res is ready) and status 200 (OK) we get res
// req.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let mainData = JSON.parse(req.responseText); // ---> getting the res as JS object so we can make operations on it

//     let container = document.createElement("div");
//     container.id = "data";
//     document.body.prepend(container);

//     for (let i = 0; i < mainData.length; i++) {
//       let div = document.createElement("div");
//       let h2 = document.createElement("h2");
//       let pContent = document.createElement("p");
//       let pWriter = document.createElement("p");
//       let pSection = document.createElement("p");

//       h2.append(document.createTextNode(mainData[i]["article_name"]));
//       pContent.append(document.createTextNode(mainData[i]["content"]));
//       pWriter.append(document.createTextNode(mainData[i]["writer"]));
//       pSection.append(document.createTextNode(mainData[i]["section"]));

//       div.append(h2, pContent, pWriter, pSection);

//       container.append(div);
//     }
//   }
// });
