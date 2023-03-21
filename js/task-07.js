const range = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
// console.log(range.value);

const addStyle = document.createElement("style");
// console.log(addStyle);
const idHead = document.head;
idHead.append(addStyle);
const idStyle = idHead.lastChild;

// это для красоты)))
idStyle.innerHTML = ` #text.resize {
        font-size: ${range.value}px;}`;
spanText.classList.remove("resize");
spanText.classList.add("resize");
// ------------------

range.addEventListener("input", (event) => {
  let change = event.currentTarget.value;
  //   console.log(change);
  idStyle.innerHTML = ` #text.resize {
        font-size: ${change}px;}`;
  spanText.classList.remove("resize");
  spanText.classList.add("resize");
});
