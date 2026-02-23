// Assignment 1

// let myPromise = new Promise((resolve, reject) => {
//   let myReq = new XMLHttpRequest();
//   myReq.open("GET", "articles.json");
//   myReq.send();

//   myReq.addEventListener("load", function () {
//     if (this.status === 200 && this.readyState === 4) {
//       let data = JSON.parse(myReq.responseText);

//       data.length = 5;

//       for (let i = 0; i < data.length; i++) {
//         let div = document.createElement("div");
//         let h2 = document.createElement("h2");
//         let p = document.createElement("p");

//         h2.append(document.createTextNode(data[i]["title"]));
//         p.append(document.createTextNode(data[i]["description"]));
//         div.append(h2, p);

//         document.body.append(div);
//       }
//     }
//   });
// });

// ----------------------------------------------------------------------------------------------------

// Assignment 2

// async function readData() {
//   let myReq = await fetch("articles.json");
//   let data = await myReq.json();

//   data.length = 5;

//   for (let i = 0; i < data.length; i++) {
//     let div = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let p = document.createElement("p");

//     h2.append(document.createTextNode(data[i]["title"]));
//     p.append(document.createTextNode(data[i]["description"]));
//     div.append(h2, p);

//     document.body.append(div);
//   }
// }

// readData();

fetch("articles.json")
  .then((fullres) => fullres.json())
  .then((res) => {
    res.length = 5;

    for (let i = 0; i < res.length; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      h2.append(document.createTextNode(res[i]["title"]));
      p.append(document.createTextNode(res[i]["description"]));
      div.append(h2, p);
      document.body.append(div);
    }
  });
