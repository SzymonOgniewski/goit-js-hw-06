const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

// button.addEventListener("click", changeColor);

// function changeColor(event) {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);

//   body.style.backgroundColor = `#${randomColor}`;
//   color.textContent = `#${randomColor}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
});
