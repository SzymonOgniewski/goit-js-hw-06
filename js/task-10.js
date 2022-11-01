function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const inputTextarea = controls.firstElementChild;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
let amount;
function createBoxes(amount) {
  for (let i = 1; i <= 100 && i <= amount; i++) {
    boxes.append(document.createElement("div"));
  }
}

createBtn.addEventListener(
  "click",
  createBoxes(
    (amount = inputTextarea.addEventListener("input", () => {
      console.log(event.currentTarget.value);
    }))
  )
);

// psycha sitting
