const input = document.querySelector("#validation-input");

input.addEventListener("focus", () => {
  if (event.currentTarget.value.length < 6) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else if (event.currentTarget.value.length >= Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});

input.addEventListener("blur", () => {
  if (event.currentTarget.value.length < 6) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else if (event.currentTarget.value.length >= Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
