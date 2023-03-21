const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const forList = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  const text = document.createTextNode(ingredient);
  newLi.appendChild(text);
  // console.log(newLi);
  list.append(newLi);
});
