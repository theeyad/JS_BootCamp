let myDiv = document.querySelector("div");

let counter = setInterval(function () {
  let value = Number(myDiv.innerHTML);

  if (value > 0 && value !== 5) {
    myDiv.innerHTML -= 1;
  } else if (value === 5) {
    window.open(
      "https://elzero.org",
      "",
      "width=500, height=500, top=100, left=500",
    );
    myDiv.innerHTML -= 1;
  } else {
    clearInterval(counter);
  }
}, 1000);
