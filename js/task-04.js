let counterValue = 0;

const value = document.querySelector("#value");
value.textContent = counterValue;

const decrBtn = document.querySelector('[data-action="decrement"]');
const decrement = () => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};
decrBtn.addEventListener("click", decrement);

const incrBtn = document.querySelector('[data-action="increment"]');
const increment = () => {
  counterValue += 1;
  return (value.textContent = counterValue);
};
incrBtn.addEventListener("click", increment);
