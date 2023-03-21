const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");
// console.log(dataLength);

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length != dataLength) {
    // console.log("Not Ok");
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    // console.log("Ok");
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
