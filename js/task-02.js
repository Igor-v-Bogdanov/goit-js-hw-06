const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newLi1 = document.createElement("li");
newLi1.classList.add("item");
const text1 = document.createTextNode(ingredients[0]);
newLi1.appendChild(text1);
console.log(newLi1);

const newLi2 = document.createElement("li");
newLi2.classList.add("item");
const text2 = document.createTextNode(ingredients[1]);
newLi2.appendChild(text2);
console.log(newLi2);

const newLi3 = document.createElement("li");
newLi3.classList.add("item");
const text3 = document.createTextNode(ingredients[2]);
newLi3.appendChild(text3);
console.log(newLi3);

const newLi4 = document.createElement("li");
newLi4.classList.add("item");
const text4 = document.createTextNode(ingredients[3]);
newLi4.appendChild(text4);
console.log(newLi4);

const newLi5 = document.createElement("li");
newLi5.classList.add("item");
const text5 = document.createTextNode(ingredients[4]);
newLi5.appendChild(text5);
console.log(newLi5);

const newLi6 = document.createElement("li");
newLi6.classList.add("item");
const text6 = document.createTextNode(ingredients[5]);
newLi6.appendChild(text6);
console.log(newLi6);

list.append(newLi1, newLi2, newLi3, newLi4, newLi5, newLi6);
