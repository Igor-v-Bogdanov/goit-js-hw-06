function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

const chgClrBtn = document.querySelector(".change-color");

chgClrBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const codeColor = document.querySelector(".color");
  codeColor.innerHTML = `<span class="color">${getRandomHexColor()}</span>`;
  document.body.style.background = getRandomHexColor();
}
