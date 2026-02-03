let addInput = document.querySelector(".classes-to-add");
let remInput = document.querySelector(".classes-to-remove");
let currentEle = document.querySelector("[title='Current']");

let eleClassList = document.querySelector(".classes-list").lastElementChild;

// show logic + edge cases
if (currentEle.classList.length !== 0) {
  currentEle.classList.forEach(function (clas) {
    let classSpan = document.createElement("span");
    let classSpanValue = document.createTextNode(`${clas}`);
    classSpan.append(classSpanValue);

    eleClassList.append(classSpan);
  });
} else {
  eleClassList.append("No Items To Show");
}

// add logic + edge cases
addInput.addEventListener("blur", function () {
  let addvals;
  if (addInput.value !== "") {
    addvals = addInput.value.trim().split(" ");
    addvals.forEach(function (val) {
      val = val.toLowerCase();
      currentEle.classList.add(val);

      if (eleClassList.textContent === "No Items To Show") {
        eleClassList.textContent = "";
        let classSpan = document.createElement("span");
        let classSpanValue = document.createTextNode(`${val}`);
        classSpan.append(classSpanValue);

        eleClassList.append(classSpan);
      } else {
        let classSpan = document.createElement("span");
        let classSpanValue = document.createTextNode(`${val}`);
        classSpan.append(classSpanValue);

        eleClassList.append(classSpan);
      }
    });
  }
  addInput.value = "";
});

// remove logic + edge cases
remInput.addEventListener("blur", function () {
  let remvals;
  if (remInput.value !== "" && currentEle.classList.length !== 0) {
    remvals = remInput.value.trim().split(" ");
    remvals.forEach(function (val) {
      val = val.toLowerCase();
      currentEle.classList.remove(val);

      eleClassList.childNodes.forEach(function (child) {
        if (child.textContent === val) {
          child.remove();

          if (
            currentEle.classList.length === 0 &&
            eleClassList.childNodes.length === 0
          ) {
            eleClassList.append("No Items To Show");
          }
        }
      });
    });
  } else if (
    currentEle.classList.length === 0 &&
    eleClassList.childNodes.length === 0
  ) {
    eleClassList.append("No Items To Show");
  }
  remInput.value = "";
});
