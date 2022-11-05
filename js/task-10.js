function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const inputTextarea = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

const createBoxes = () => {
  const amount = inputTextarea.value;
  console.log(amount);
  if (amount >= 1 && amount <= 100) {
    let boxAmount = 0;
    while (boxAmount < amount) {
      const boxesToCreate = document.createElement("div");
      boxesToCreate.style.backgroundColor = `${getRandomHexColor()}`;
      boxesToCreate.style.width = `${30 + boxAmount * 10}px`;
      boxesToCreate.style.height = `${30 + boxAmount * 10}px`;
      boxes.append(boxesToCreate);
      boxAmount += 1;
      console.log(boxAmount);
    }
  } else {
    return alert(
      "Unable to create boxes, we can only create minimum 1 box and maximum 100 boxes"
    );
  }
};
createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
