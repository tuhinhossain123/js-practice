function makeRed() {
  document.body.style.backgroundColor = "green";
}

document.getElementById("make-blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  const p = document.getElementById("defult-text");
  p.innerText = inputText;
  inputField.value = ""
});
