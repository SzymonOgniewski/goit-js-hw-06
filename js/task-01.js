const categoriesList = document.querySelectorAll(".item");
const categoryCount = categoriesList.length;
console.log(`Categories: ${categoryCount}`);

const subCategoriesList = document.querySelectorAll(".item > ul ");
console.log(subCategoriesList);

subCategoriesList.forEach((element) => {
  const subCategoriesTitle = document.querySelector(".item > h2");
  console.log(`Category: ${subCategoriesTitle.textContent}`);
});
