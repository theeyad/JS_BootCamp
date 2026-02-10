let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");

// Data that will change
let state = {
  userName: "",
  email: "",
  password: "",
  option: "",
};

// Checking if any data in storage
if (window.sessionStorage.getItem("state")) {
  state = JSON.parse(window.sessionStorage.getItem("state"));
  updateDomWithState();
}

// Listening to each input
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    setInputsValue(input);
  });
});

// Listening to select
select.addEventListener("change", () => {
  setSelectValue(select);
});

// Setting inputs to state (if any)
function setInputsValue(input) {
  if (input.value !== "") {
    if (input.id === "username") {
      state.userName = input.value;
    } else if (input.id === "email") {
      state.email = input.value;
    } else {
      state.password = input.value;
    }

    saveStateToSessionStorage();
  }
}

// Setting select to state (if any)
function setSelectValue(select) {
  state.option = select.value;
  saveStateToSessionStorage();
}

// Updating DOM depending on state
function updateDomWithState() {
  document.querySelector("input[id='username']").value = state.userName;
  document.querySelector("input[id='email']").value = state.email;
  document.querySelector("input[id='password']").value = state.password;
  document.querySelector("select").value = state.option;
}

// Save state to SessionStorage
function saveStateToSessionStorage() {
  window.sessionStorage.setItem("state", JSON.stringify(state));
}
