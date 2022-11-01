const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

console.log(list);
for (let element of ingredients) {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  console.log(item);
  list.append(item);
}
