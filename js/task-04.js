let counterValue = 0;

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

const btnPlusOne = counter.lastElementChild;
btnPlusOne.addEventListener("click", (event) => {
  counterValue = counterValue + 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
  //   console.log(counterValue);
});

const btnMinusOne = counter.firstElementChild;
btnMinusOne.addEventListener("click", (event) => {
  counterValue = counterValue - 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
  //   console.log(counterValue);
});
