const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = "Anonimous";
  }
});
