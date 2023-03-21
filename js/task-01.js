const listOfCategories = document.querySelector("#categories");
const arrayOfCategories = listOfCategories.children;
const numberOfCategories = arrayOfCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

const itemOfCategories = document.querySelectorAll(".item");

itemOfCategories.forEach((element) => {
  const headerOfItem = element.firstElementChild;
  console.log(`Category: ${headerOfItem.innerHTML}`);

  const listOfItem = element.lastElementChild;
  const arrayOfItems = listOfItem.children;
  const numberOfElements = arrayOfItems.length;
  console.log(`Elements: ${numberOfElements}`);
});
