const textArea = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textArea.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value || "Anonymous";
});
