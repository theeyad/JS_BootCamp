let form = document.querySelector(".form");

let elementsNum = document.querySelector("[name='elements']");
let elementsText = document.querySelector("[name='texts']");
let options = document.querySelector("select");
let container = document.querySelector(".results");

form.onsubmit = function (e) {
  e.preventDefault();

  if (container.children.length !== 0) {
    container.replaceChildren();
  }

  for (let i = 0; i < elementsNum.value; i++) {
    let creation;
    let text;

    if (options.value === "Div") {
      creation = document.createElement("div");
    } else {
      creation = document.createElement("section");
    }

    text = document.createTextNode(`${elementsText.value}`);

    creation.setAttribute("class", "box");
    creation.setAttribute("title", "Element");
    creation.setAttribute("id", `id-${i + 1}`);

    creation.appendChild(text);

    container.appendChild(creation);
  }
};
