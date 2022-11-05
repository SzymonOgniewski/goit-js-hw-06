const form = document.querySelector(".login-form");
const submit = form.lastElementChild;
const emailInput = form.firstElementChild.firstElementChild;
const passwordInput =
  form.firstElementChild.nextElementSibling.firstElementChild;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
