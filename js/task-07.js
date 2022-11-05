const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = "56px";

input.addEventListener("input", () => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
