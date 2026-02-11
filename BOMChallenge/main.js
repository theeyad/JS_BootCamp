let inpText = document.querySelector("input[id='title']");
let subBtn = document.querySelector("input[type='submit']");
let tasks = document.querySelector("div.tasks");

let storageArr = [];

if (window.localStorage.getItem("task")) {
  storageArr = JSON.parse(window.localStorage.getItem("task"));
  storageArr.forEach((task) => {
    setTask(task);
  });
}

inpText.focus();

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getTaskTitle(inpText);
  inpText.value = "";
  inpText.focus();
});

function getTaskTitle(text) {
  if (text.value !== "") {
    let state = {
      id: Date.now(),
      title: text.value,
    };
    storeToLocalStorage(state);
    setTask(state);
  }
}

function setTask(task) {
  let taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.id = task.id;
  taskDiv.append(document.createTextNode(`${task.title}`));

  let delBtn = createDelBtn();
  taskDiv.append(delBtn);

  delBtn.addEventListener("click", function () {
    deleteFromLocalStorage(Number(delBtn.parentElement.id));
    delBtn.parentElement.remove();
    inpText.focus();
  });

  tasks.append(taskDiv);
}

function createDelBtn() {
  let delBtn = document.createElement("button");
  delBtn.className = "delete";
  delBtn.append(document.createTextNode("Delete"));

  return delBtn;
}

function storeToLocalStorage(task) {
  storageArr.push(task);
  window.localStorage.setItem("task", JSON.stringify(storageArr));
}

function deleteFromLocalStorage(id) {
  storageArr = storageArr.filter((task) => task.id !== id);
  window.localStorage.setItem("task", JSON.stringify(storageArr));
}
