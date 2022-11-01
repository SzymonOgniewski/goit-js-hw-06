const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const imagesMapped = images.map;
// console.log(imagesMapped);

const list = document.querySelector(".gallery");
images.forEach((element) => {
  list.insertAdjacentHTML(
    "afterbegin",
    `<li><img src="${element.url}" alt="${element.alt}"></li>`
  );
});
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.width = "100%";
list.style.gap = "25px";
list.style.boxSizing = "border-box";
list.style.listStyle = "none";
const item = document.querySelectorAll("img");
console.log(item);
item.forEach((element) => {
  element.style.width = "450px";
});
