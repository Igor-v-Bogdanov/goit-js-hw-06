const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const newArray = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  const text = document.createTextNode(ingredient);
  newLi.appendChild(text);
  // console.log(newLi);
  return newLi;
});

// console.log(newArray);

list.append(...newArray);
