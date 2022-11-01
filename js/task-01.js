const categoriesList = document.querySelectorAll(".item");
const categoryCount = categoriesList.length;
console.log(`Number of categories: ${categoryCount}`);

categoriesList.forEach((element) => {
  const categoryName = element.firstElementChild;
  console.log(`Category: ${categoryName.innerHTML}`);
  const items = categoryName.nextElementSibling.children;
  console.log(`Elements: ${items.length}`);
});
